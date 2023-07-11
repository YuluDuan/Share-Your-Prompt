// set dynamic authentication with google
import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";
import { connectToDB } from "@utils/databse";
import User from "@models/user";

const handler = NextAuth({
    providers: [
        GoogleProvider({
            clientId:process.env.GOOGLE_ID,
            clientSecret:process.env.GOOGLE_CLIENT_SECRET,
        })
    ],

    async session({session}){
        //confirm the online user
        const  sessionUser = await User.findOne({
            email: session.user.email
        })

        session.user.id = sessionUser._id.toString();
        return session;
    },

    async signIn({profile}) {
        try{
            // severless route ->  lambda -> opens only called -> dynamodb [connect to db]
            await connectToDB();
            // check is a user already exists
            const UserExists = await User.findOne({email: profile.email})
            //if not create new user 
            if (!UserExists){
                await User.create({
                    email: profile.email,
                    username: profile.name.replace(" ", "").toLowerCase(),
                    image: profile.picture
                })
            }
            return true;
        }catch(error){
            return false;
        }

    }
})

export {handler as GET, handler as POST};