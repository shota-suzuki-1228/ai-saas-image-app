import { stripe } from "@/config/stripe";
import { prisma } from "@/lib/prisma";
import { currentUser } from "@clerk/nextjs/server"
import { NextResponse } from "next/server"

export async function POST(){
    try{
        const user = await currentUser();

        if(!user){
            return NextResponse.json({error:"Unauthorized"},{status:401})
        }

        const dbUser = await prisma.user.findUnique({
            where:{clerkId:user.id},
        });

        if(!dbUser?.stripeCustomerId){
            return NextResponse.json(
                {error:"User not found"},{status:404}
            );
        }

        const session = await stripe.billingPortal.sessions.create({
            customer:dbUser.stripeCustomerId!,
            return_url:`${process.env.BASE_URL}/dashboard/settings`
        });

        return NextResponse.json({url:session.url},{status:200})
    }catch(error){
        console.error("Error",error)
        return NextResponse.json({error:"Internal Server Error"},{status:500})
    }
}