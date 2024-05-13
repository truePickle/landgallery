import mongoose from "mongoose";

const addressSchema = new mongoose.Schema({
    land: {
        type: String,
        default: "Deutschland"
    },
    city: {
        type: String,
        required: true,
    },
    zipcode: {
        type: Number,
        required: true,
    },
    street: {
        type: String,
        required: true,
    },
    homeNumber: {
        type: String,
        required: true,
    }
})

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required: true,
        unique: true,
        min: 3,
        max:25
    },
    email:{
        type:String,
        required: true,
        unique: true,
        min: 3,
        max:50
    },
    password: {
        type:String
    },
    image: {
        type:String,
    },
    address: {
        type: addressSchema
    },
    isAdmin:{
        type: Boolean,
        default: false,
    },
    isArtist: {
        type: Boolean,
        default: false
    }

}, {timestamps: true})

const orderSchema = new mongoose.Schema({
    userEmail: {
        type: String,
        required: true
    },
    itemID: {
        type: String,
        required: true,
    },
    address: {
        type: addressSchema,
        required: true
    }
},{timestamps: true})
const itemSchema = new mongoose.Schema({
    title:{
        type:String,
        required: true,
        min: 1
    },
    description:{
        type:String
    },
    author: {
        type: String,
        required: true,
    },
    availableItemSizes:{
        itemSizes:[{
            width: {
                type: Number,
                required: true
            },
            height: {
                type: Number,
                required: true
            }
        }]
    },
    image: {
        type:String,
    },
    images: [{
        type:String,
    }],
    slug:{
        type: String,
        required: true,
        unique: true
    },
    quantity: {
        type: Number,
        required: true,
    }
}, {timestamps:true})

export  const User = mongoose.models?.User || mongoose.model("User", userSchema)
export  const Item = mongoose.models?.Item || mongoose.model("Item", itemSchema)
export  const Order = mongoose.models?.Order || mongoose.model("Order", orderSchema)
export const Address = mongoose.models?.Address || mongoose.model("Address", addressSchema)