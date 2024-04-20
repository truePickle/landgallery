import {Item, User} from "@/lib/models";
import {connectToDb} from "@/lib/connectToDb";

export const getItems = async () => {
    try {
        await connectToDb()
        return await Item.find()
    } catch (error) {
        console.log(error)
        throw new Error("Failed to fetch items!")
    }
}

export const getItem = async (slug) => {
    try {
        await connectToDb()
        return await Item.find({slug})
    } catch (error) {
        console.log(error)
        throw new Error("Failed to fetch item!")
    }
}

export const getUser = async (id) => {
    try {
        await connectToDb()
        return await User.findById(id)
    } catch (error) {
        console.log(error)
        throw new Error("Failed to fetch user!")
    }
}

export const getUsers = async () => {
    try {
        await connectToDb()
        return await User.find()
    } catch (error) {
        console.log(error)
        throw new Error("Failed to fetch users!")
    }
}