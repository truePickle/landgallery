
import {connectToDb} from "@/lib/connectToDb";
import {Item} from "@/lib/models";
import {NextResponse} from "next/server";

export const GET = async (request) => {
    try {
        await connectToDb()
        const items = await Item.find()
        return NextResponse.json(items)
    } catch (error) {
        console.log(error)
        throw new Error("Failed to fetch items!")
    }
}