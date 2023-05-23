import { NextApiRequest,NextApiResponse } from "next";
import bcrypt from 'bcrypt';
import prismadb from '@/lib/prismadb';

export default async function handler(req: NextApiRequest,res: NextApiResponse){
    if(req.method !== 'POST'){
        res.status(405).end();
    }

    

    try {
        const {name,email,password} = req.body;

        const existingUser = await prismadb.user.findUnique({
            where:{
                email: email
            }
        })

        if(existingUser){
            return res.status(400).json
            ({
                error: 'User already exists'
            })
        }

        const hashedPassword = await bcrypt.hash(password,12);

        const newUser = await prismadb.user.create({
            data: {
                name,
                email,
                hashedPassword,
                emailVerified: new Date(),
                image: ''
            }
        })

        return res.status(200).json(newUser);

    } catch (error) {
        console.log(error);
    }
}