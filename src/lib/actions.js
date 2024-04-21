"use server"
import {signIn, signOut} from "@/lib/auth";
import {connectToDb} from "@/lib/connectToDb";
import {User} from "@/lib/models";
import bcrypt from "bcryptjs"

export const sayHello = async () =>{

    console.log("hello")
}

export const handleGitHubLogin = async () =>{
    await signIn("github")
}
export const handleLogout = async () =>{
    await signOut()
}

export const register = async (previousState, formData) =>{
    const {username, email, image, password, passwordRepeat} = Object.fromEntries(formData)

    if (password !== passwordRepeat) {
        return {error: "Passwords do not match."}
    }

    try {
        await connectToDb()
        const user = await User.findOne({username})
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt)
        if(user){
            if(user.username === username) {
                return {error: "Username already exists. Try to login"};
            } else if (user.email === email) {
                return {error: "User with this email already exists. Try to login"};
            }
            return {error: "User already exists. Try to login"}
        }
        const newUser = new User({
            username: username,
            email: email,
            password: hashedPassword,
            image: image
        });
        await newUser.save()
        console.log("saved to db")
        return {success: true}
    } catch (err) {
        console.log(err)
        return {error: "Could not register a new user!"}

    }
}

export const login = async (previousState,formData) =>{
    const {username, password} = Object.fromEntries(formData)

    try {
        console.log(username, password)
        await signIn("credentials", {username, password})


    } catch (err) {
        console.log(err)
        if (err.message.includes("CredentialsSignin")){
            return {error: "Invalid username or password"}
        }
        throw  err

    }
}
