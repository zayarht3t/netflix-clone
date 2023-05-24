import React from 'react'
import {BsFillPlayFill} from 'react-icons/bs';
import AddFavoriteButton from './AddFavoriteButton';

interface MovieCardProps {
    data: Record<string,any>;
}

const MovieCard:React.FC<MovieCardProps> = ({data}) => {
  return (
    <div className='relative group col-span h-[12vw] bg-zinc-900'>
        <img
        className='
            cursor-pointer
            object-cover
            duration
            transition
            shadow-xl
            rounded-md
            group-hover:opacity-90
            sm:group-hover:opacity-0
            delay-300
            w-full
            h-[12vw]
        ' 
        src={data.thumbnailUrl} 
        alt="thumbnail" />
        <div
         className='
            opacity-0
            absolute
            top-0
            transition
            duration-200
            z-10
            invisible
            sm:visible
            delay-300
            w-full
            scale-0
            group-hover:scale-110
            group-hover:-translate-y-[6vw]
            group-hover:translate-x-[2vw]
            group-hover:opacity-100
         '
        >
            <img 
             className='
                cursor-pointer
                object-cover
                duration
                transition
                shadow-xl
                rounded-t-md
                w-full
                h-[12vw]
             '
            src={data.thumbnailUrl} alt="thumbnail" />
            <div
            className='
             z-10
             bg-zinc-800
             p-2
             lg:p-4
             absolute
             w-full
             transition
             shadow-md
             rounded-b-md
            '>
                <div className='flex flex-row items-center gap-3'>
                    <div 
                    className='
                        h-6
                        w-6
                        lg:h-10
                        lg:w-10
                        bg-zinc-100
                        hover:bg-neutral-700
                        rounded-full
                        flex
                        items-center
                        justify-center
                        cursor-pointer

                    '
                    >
                        <BsFillPlayFill size={30}/>
                    </div>
                    <AddFavoriteButton id={data.id}/>
                </div>
                <p className='mt-4 text-green-400 font-semibold'>
                    New <span className='text-white'>2023</span>
                </p>
                <div className='flex flex-row mt-4 items-center'>
                    <p className='text-white text-[10px] lg:text-sm'>{data.duration}</p>
                </div>
                <div className='flex flex-row mt-4 items-center'>
                    <p className='text-white text-[10px] lg:text-sm'>{data.genre}</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default MovieCard