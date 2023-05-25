import useCurrentUser from '@/hooks/useCurrentUser'
import useFavorite from '@/hooks/useFavorite'
import axios from 'axios'
import React, { useCallback, useMemo } from 'react'
import {AiOutlinePlus,AiOutlineCheck} from 'react-icons/ai'

interface FavoriteIdProps {
    id: string
}

const AddFavoriteButton:React.FC<FavoriteIdProps> = ({id}) => {
    const {data: currentUser,mutate} = useCurrentUser();
    const {mutate: mutateFavorite} = useFavorite();
    const isFavorite = useMemo(()=>{
        const list = currentUser?.favoriteIds || [];

        return list.includes(id);
    },[currentUser,id])

    const toggleFavorite = useCallback(async()=>{
        let response;
        if(isFavorite){
            response = await axios.delete('/api/favorite',{data: {movieid: id}})
        }else{
            response = await axios.post('/api/favorite',{movieid: id});
        }

        const updateFavoriteIds = response?.data?.favoriteIds;

        mutate({
            ...currentUser,
            favoriteIds: updateFavoriteIds
        })

        mutateFavorite();
    },[id,isFavorite,currentUser,mutate,mutateFavorite])

    const Icon = isFavorite ? AiOutlineCheck : AiOutlinePlus
  return (
    <div
    onClick={toggleFavorite} 
    className='
        h-6
        w-6
        lg:h-10
        lg:w-10
        hover:bg-neutral-700
        rounded-full
        flex
        items-center
        justify-center
        cursor-pointer
        border-white
        border-2
    '
    >
        <Icon size={30} className='text-white'/>
    </div>
  )
}

export default AddFavoriteButton