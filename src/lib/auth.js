import NextAuth from "next-auth";
import Github from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials"
import {connectToDb} from "@/lib/connectToDb";
import {User} from "@/lib/models";
import bcrypt from "bcryptjs";


const login = async (credentials) => {
    try {
        await connectToDb();
        const user = await User.findOne({username: credentials.username})
        if (!user) {
            throw new Error("Check your username or password")
        }
        const isPasswordCorrect = await bcrypt.compare(credentials.password, user.password);
        if (!isPasswordCorrect) {
            throw new Error("Check your username or password")
        }
        return user
    } catch (err) {
        console.log(err)
        throw new Error("Failed to login: $(err)")
    }
}
export const {
    handlers: {GET, POST},
    auth,
    signIn,
    signOut
} = NextAuth(
    {
        providers:
            [Github(
                {
                    clientId: process.env.GITHUB_ID,
                    clientSecret: process.env.GITHUB_SECRET
                }),
                CredentialsProvider({
                    async authorize(credentials) {
                        try {
                            await login(credentials)
                        } catch (err) {
                            return null
                        }
                    }
                })
            ],
        callbacks: {
            async signIn({user, account, profile}) {
                console.log(user, account, profile)
                if (account.provider === "github") {
                    await connectToDb()
                    try {
                        const user = await User.findOne({email: profile.email})

                        if (!user) {
                            const newUser = new User({
                                username: profile.login,
                                email: profile.email,
                                image: profile.avatar_url
                            })
                            await newUser.save()
                        }
                    } catch (err) {
                        console.log(err);
                        return false;
                    }
                    return true;
                }
            }
        }
    });