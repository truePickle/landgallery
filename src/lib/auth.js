import NextAuth from "next-auth";
import Github from "next-auth/providers/github";
import Credentials from "next-auth/providers/credentials"
import {connectToDb} from "@/lib/connectToDb";
import {User} from "@/lib/models";
import bcrypt from "bcryptjs";
import {authConfig} from "@/lib/auth.config";


const login = async (credentials) => {
    try {
        await connectToDb();
        const user = await User.findOne({username: credentials.username})

        if (!user) {
            throw new Error("Check your username")
        }
        console.log(user.password, user.username)
        const isPasswordCorrect = await bcrypt.compare(credentials.password, user.password);
        console.log(isPasswordCorrect)
        if (!isPasswordCorrect) {
            throw new Error("Check your password")
        }
        return user
    } catch (err) {
        console.log(err)
        throw new Error(`Failed to login: ${err}`)
    }
}
export const {
    handlers,
    auth,
    signIn,
    signOut
} = NextAuth(
    {
        ...authConfig,
        providers:
            [Github(
                {
                    clientId: process.env.GITHUB_ID,
                    clientSecret: process.env.GITHUB_SECRET
                }),
                Credentials({

                    async authorize(credentials) {
                        console.log(credentials)
                        try {
                            return await login(credentials)
                        } catch (err) {
                            return null
                        }
                    }
                })
            ],
        callbacks: {
            async signIn({user, account, profile, credentials}) {
                console.log(user, account, profile)
                if(account && account.provider === 'credentials'){
                    try {
                        const authenticatedUser = await login(credentials);
                        if (authenticatedUser) {
                            // Successful authentication
                            return true;
                        } else {
                            // Failed authentication
                            return false;
                        }
                    } catch (error) {
                        console.error('Authentication error:', error);
                        return false;
                    }
                }
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
            },
        ...authConfig.callbacks
        }
    });