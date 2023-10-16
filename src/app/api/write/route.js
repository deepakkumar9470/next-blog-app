import { getAuthSession } from "@/utils/auth"
import prisma from "@/utils/connect"
import { NextResponse } from "next/server"

export const POST =  async (req,res) =>{
    const session = await getAuthSession();
    if(!session){
        return new  NextResponse(JSON.stringify({message : "Not Authenticated"}, {status:  401}))
  
    }

    try {
          const body = await req.json()
          const post = await prisma.post.create({
            data : {...body, userEmail : session.user.email}
          })
          return new NextResponse(JSON.stringify(post,{status:  200}))

    } catch (error) {
         return new  NextResponse(JSON.stringify({message : "Some thing went wrong"}, {status:  500}))
    }
}