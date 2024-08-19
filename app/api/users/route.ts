import User from "@/lib/models/User";
import connect from "@/lib/mondoDB";
import { auth } from "@clerk/nextjs/server";

import { NextRequest, NextResponse } from "next/server";

export const GET = async(req:NextRequest){
    try {

        const {userId} = auth();

        if (!userId) return new NextResponse("unauthorized");

        await connect();

        let user = await User.findOne({clerkId:userId});

        if(!user){
            user = await User.create({clerkId:userId});
            await user.save();
        }

        return  NextResponse.json(user, {status:200});
        
    } catch (error) {
        console.log("[user GET] ", error);
        return new NextResponse("internal server error", {status:500});
    }
}