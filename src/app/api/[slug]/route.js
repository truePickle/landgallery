
import {connectToDb} from "@/lib/connectToDb";
import {Item} from "@/lib/models";
import {NextResponse} from "next/server";

export const GET = async (request, {params}) => {
    const {slug} = params;

    try {
        await connectToDb()
        const item = await Item.findOne({slug})
        return NextResponse.json(item)
    } catch (error) {
        console.log(error)
        throw new Error("Failed to fetch item!")
    }
}

export const DELETE = async (request, {params}) => {
    const {slug} = params;

    try {
        await connectToDb()
        const item = await Item.deleteOne({slug})
        return NextResponse.json("Post deleted")
    } catch (error) {
        console.log(error)
        throw new Error("Failed to delete item!")
    }
}