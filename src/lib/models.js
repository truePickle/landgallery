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
    username: {
        type: String,
        required: true,
        unique: true,
        min: 3,
        max: 25
    },
    email: {
        type: String,
        required: true,
        unique: true,
        min: 3,
        max: 50
    },
    password: {
        type: String
    },
    image: {
        type: String,
    },
    address: {
        type: addressSchema
    },
    isAdmin: {
        type: Boolean,
        default: false,
    },
    isArtist: {
        type: Boolean,
        default: false
    },
    aboutMe: {
        type: String,
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
}, {timestamps: true})
const authorSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true,
    },
    items: [{
        item: {
            type: String,
            required: true,
            unique: true
        }
    }]
})
const itemSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        min: 1
    },
    description: {
        type: String
    },
    author: {
        type: {
            username: {
                type: String,
                required: true
            },
            userId: {
                type: String,
                required: true
            }
        }
    },
    sizes: {
        type: [{
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
        type: String,
        required: true
    },
    slug: {
        type: String,
        required: true,
        unique: true
    },
    quantity: {
        type: Number,
        required: true,
    }
}, {timestamps: true})
const gallerySchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        city: {
            type: String,
            required: true
        },
        address: {
            type: String,
            required: true
        },
        position: {
            type: {
                lat: {
                    type: Number,
                    required: true
                },
                lng: {
                    type: Number,
                    required: true
                }
            }
        },
        openTime: {
            type: String,
            required: true
        },
        openDays: {
            type: String,
            required: true
        },
        slug: {
            type: String,
            required: true,
            unique: true
        }
    }
)
export const Gallery = mongoose.models?.Gallery || mongoose.model("Gallery", gallerySchema)
export const User = mongoose.models?.User || mongoose.model("User", userSchema)
export const Item = mongoose.models?.Item || mongoose.model("Item", itemSchema)
export const Author = mongoose.models?.Author || mongoose.model("Author", authorSchema)
export const Order = mongoose.models?.Order || mongoose.model("Order", orderSchema)
export const Address = mongoose.models?.Address || mongoose.model("Address", addressSchema)