import mongoose from "mongoose";

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
    isAdmin:{
        type: Boolean,
        default: false,
    },
    isArtist: {
        type: Boolean,
        default: false
    }

}, {timestamps: true})

const itemSchema = new mongoose.Schema({
    title:{
        type:String,
        required: true,
        min: 1
    },
    description:{
        type:String
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
    userId:{
        type: String,
        required: true
    },
    slug:{
        type: String,
        required: true,
        unique: true
    }
}, {timestamps:true})

export  const User = mongoose.models?.User || mongoose.model("User", userSchema)
export  const Item = mongoose.models?.Item || mongoose.model("Item", itemSchema)
