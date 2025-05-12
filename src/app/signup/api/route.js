import { NextResponse } from "next/server";
import { connectDb } from "../../../lib/connectDb";

export const POST = async (request) => {
    const newUser = await request.json();
    try {
        const db = await connectDb();
        const userCollection = db.collection("users");
        const exist = await userCollection.findOne({email: newUser.email});
        if (exist) {
            return NextResponse.json({message: "User already exists"}, {status:400});
        }
        const result = await userCollection.insertOne(newUser);
        return NextResponse.json({message: "User created successfully"}, {status:200});
    } catch (error) {
        return NextResponse.json({message: "User creation failed", error}, {status:500});
    }
   
}
