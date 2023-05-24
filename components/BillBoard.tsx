import useBillBoard from '@/hooks/useBillBoard'
import React from 'react'

import {AiOutlineInfoCircle} from 'react-icons/ai'

const BillBoard = () => {
    const {data} = useBillBoard();
  return (
    <div className='relative h-[56.25vw]'>
        <video
         className='
            w-full
            h-[56.25vw]
            object-cover
            brightness-[60%]
         '
         autoPlay 
         muted 
         loop 
         poster={data?.thumbnailUrl} 
         src={data?.videoUrl}></video>
         <div className='absolute top-[30%] md:top-[40%] ml-4 md:ml-16'>
            <p className='text-white text-xl md:text-5xl h-full w-[50%] lg:text-6xl font-bold drop-shadow-xl'>
                {data?.title}
            </p>
            <p className='text-white md:text-lg w-[90%] md:w-[80%] lg:w-[35%] mt-4 font-[8px] drop-shadow-xl'>
                {data?.description}
            </p>
            <div className='flex flex-row gap-3 md:mt-4 mt-3 items-center'>
                <button
                className='
                    bg-white
                    text-white
                    bg-opacity-30
                    rounded-md
                    font-semibold
                    py-1 md:py-2
                    px-2 md:px-4
                    hover:bg-opacity-20
                    flex
                    flex-row
                    items-center
                    transition
                    gap-2
                '
                >
                    <AiOutlineInfoCircle/>
                    More Info</button>
            </div>
         </div>
    </div>
  )
}

export default BillBoard