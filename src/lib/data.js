import {Author, Gallery, Item, User} from "@/lib/models";
import {connectToDb} from "@/lib/connectToDb";

export const getItems = async () => {
    try {
        await connectToDb()
        const items = await Item.find()
        console.log(items)
        return items

    } catch (error) {
        console.log(error)
        throw new Error("Failed to fetch items!")
    }
}

export const getItemsFromUser = async (userId) => {
    try {
        await connectToDb()
        return await Item.find({ 'author.userId': userId })
    } catch (error) {
        console.log(error)
        throw new Error("Failed to fetch items!")
    }
}

export const getItem = async (slug) => {
    console.log("slug in DB " + slug)
    try {
        await connectToDb()

        return await Item.findOne({slug: slug})
    } catch (error) {
        console.log(error)
        throw new Error("Failed to fetch item!")
    }
}
export const getGalleries = async () => {
    try {
        await connectToDb()

        return await Gallery.find()
    }  catch (error) {
        console.log(error)
        throw new Error("Failed to fetch galleries!")
    }
}
export const getGallery = async (slug) => {
    try {
        await connectToDb()
        return await Gallery.findOne({slug: slug})
    }  catch (error) {
        console.log(error)
        throw new Error("Failed to fetch gallery by slug!")
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
export const getAuthor = async (userId) => {
    try {
        await connectToDb()
        return await Author.findById({userId: userId})
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