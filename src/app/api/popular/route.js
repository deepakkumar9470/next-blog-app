import { getAuthSession } from "@/utils/auth"
import prisma from "@/utils/connect"
import { NextResponse } from "next/server"


  // Most Popular Post 

  export const GET =  async (req,res) =>{
    const session = await getAuthSession()

    if(!session){
      return new  NextResponse(JSON.stringify({message : "Not Authenticated"}, {status:  401}))  
    }
  
    try {

      const post = await prisma.post.findMany({
        orderBy: {
          views: 'desc', 
        },
        take: 5
      });
  
      return new NextResponse(JSON.stringify(post, { status: 200 }));
    } catch (error) {
         return new  NextResponse(JSON.stringify({message : "Some thing went wrong"}, {status:  500}))
    }
  }  