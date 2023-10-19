"use client";
import React, { useEffect, useState } from "react";
import styles from "./writepost.module.css";
import Image from "next/image";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { app } from "@/utils/firebase";
import {toast} from "react-hot-toast";

const WritePost = () => {
  const {status} = useSession()
  const router = useRouter()

  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [value, setValue] = useState("");
  const [file, setFile] = useState(null);
  const [media, setMedia] = useState("");
  const [catSlug, setCatSlug] = useState("");
  
 
  useEffect(() => {
    const storage = getStorage(app);
    const upload = () => {
      const name = new Date().getTime() + file.name;
      const storageRef = ref(storage, name);

      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        },
        (error) => {},
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setMedia(downloadURL);
          });
        }
      );
    };

    file && upload();
  }, [file]);

  if (status === "loading") {
    return <div className={styles.loading}>Loading...</div>;
  }

  if (status === "unauthenticated") {
    router.push("/");
  }

   const slugify = (str) =>
   str
     .toLowerCase()
     .trim()
     .replace(/[^\w\s-]/g, "")
     .replace(/[\s_-]+/g, "-")
     .replace(/^-+|-+$/g, "");

  const handlePublishPost = async () =>{
 
    const res = await fetch(`/api/posts`, {
      method : "POST",
      body : JSON.stringify({
        title,
        desc : value,
        img: media,
        slug : slugify(title),
        catSlug : catSlug || "style",
      })
    });

    if (res.status === 200) {
      const data = await res.json();
      toast.success('Post Successfully')
      router.push(`/posts/${data.slug}`);
    
    }
    

  }

  return (
    <div className={styles.container}>
      <input 
      value={title}
      onChange={(e)=>setTitle(e.target.value)}
      className={styles.input} 
      type="text" 
      placeholder="Enter title.." />
      <select className={styles.select} onChange={(e) => setCatSlug(e.target.value)}>
        <option value="style">style</option>
        <option value="fashion">fashion</option>
        <option value="food">food</option>
        <option value="culture">culture</option>
        <option value="travel">travel</option>
        <option value="coding">coding</option>
      </select>
      <div className={styles.editor}>
        <button className={styles.button} onClick={() => setOpen(!open)}>
          <Image className={styles.image} src="/plus.png" width={16} height={16} alt="plus" />
        </button>
        {open && (
          <div className={styles.add}>
            <input
               name="file"
               id="imageid" 
               type="file" 
               onChange={(e)=>setFile(e.target.files[0])}
               style={{display : "none"}} />
            <button className={styles.addButton}>
              <label htmlFor="imageid">
              <Image className={styles.image} src="/image.png" width={20} height={20} alt="plus" />
              </label>               
            </button>
            <button className={styles.addButton}>
              <Image className={styles.image} src="/upload.png" width={20} height={20} alt="plus" />
            </button>
            <button className={styles.addButton}>
              <Image className={styles.image} src="/video.png" width={20} height={20} alt="plus" />
            </button>
          </div>
        )}

        <ReactQuill
          className={styles.textArea}
          theme="bubble"
          value={value}
          onChange={setValue}
          placeholder="Tell your story...."
        />
      </div>

      <button 
         className={styles.publishBtn} 
         onClick={handlePublishPost}>
          Publish
          
          </button>
    </div>
  );
};

export default WritePost;
