import { NextApiRequest,NextApiResponse } from "next";
import serverAuth from "@/lib/serverAuth";
import prismadb from '@/lib/prismadb';
import { without } from "lodash";

export default async function(req: NextApiRequest, res: NextApiResponse){
    try {
        if(req.method === 'POST'){
            const {currentUser} = await serverAuth(req,res);
            const {movieid} = req.body;
            console.log(movieid);
    
            const existingMovie = await prismadb.movie.findUnique({
                where: {
                    id: movieid
                }
            })
    
            if(!existingMovie){
                throw new Error('Movie does not exist');
            }
    
            const user = await prismadb.user.update({
                where: {
                    email: currentUser.email || ''
                },
                data: {
                    favoriteIds: {
                        push: movieid
                    }
                }
            })
    
            return res.status(200).json(user)
        }

        if(req.method === 'DELETE'){
            const {currentUser} = await serverAuth(req,res);

            const {movieid} = req.body;

            const existingMovie = await prismadb.movie.findUnique({
                            where: {
                                id: movieid
                            }
            })

            if(!existingMovie){
                throw new Error('Movie does not exist');
            }

            const favoriteIds = without(currentUser.favoriteIds, movieid);

            const updateUser = await prismadb.user.update({
                where: {
                    email: currentUser.email || ''
                },
                data: {
                    favoriteIds: favoriteIds
                }
            })
            return res.status(200).json(updateUser);
        }

        return res.status(405).end();
        
    } catch (error) {
        console.log(error);
        return res.status(400).end();
    }
}