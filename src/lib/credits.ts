import "server-only";

import { currentUser } from "@clerk/nextjs/server";
import { prisma } from "./prisma";
import { unstable_noStore as noStore } from 'next/cache';

export async function getUserCredits(){
    noStore();

    try{
        const user = await currentUser();

        if(!user){
            return null;
        }

        const dbUser = await prisma.user.findUnique({
            where:{
                clerkId:user.id,
            },
            select:{
                credits:true,
            }
        });

        return dbUser?.credits ?? 0;
    }catch(error){
        console.error("Error fetching user credits",error);
        return 0;
    }
}

export async function decrementUserCredits(clerkId:string){
    try{
        const user = await prisma.user.update({
            where:{
                clerkId:clerkId,
            },
            data:{
                credits:{
                    decrement:1,
                },
            },
            select:{
                credits:true,
            }
        });

        return user?.credits ?? 0;
    }catch(error){
        console.error("Error decrementing user credits",error);
        throw new Error("Failed to decrement user credits");
    }
}