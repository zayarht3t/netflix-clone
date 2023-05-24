import { NextApiRequest, NextApiResponse } from "next";
import serverAuth from "@/lib/serverAuth";
import prismadb from "@/lib/prismadb";

export default async function handler(req: NextApiRequest,res: NextApiResponse){
    if(req.method !== "GET"){
        res.status(405).end();
    }

    try {
        
        await serverAuth(req,res);
        const movieCount = await prismadb.movie.count();
        const randomIndex = Math.floor(Math.random() * movieCount);

        const randomMovie = await prismadb.movie.findMany(
            {
                take: 1,
                skip: randomIndex
            }
        )
        return res.status(200).json(randomMovie[0])

    } catch (error) {
        console.log(error);
        res.status(400).end();
    }
}