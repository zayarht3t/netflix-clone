import React from 'react'
import {isEmpty} from 'lodash'
import MovieCard from './MovieCard';

interface MovieListProps {
    data: Record<string,any>[];
    title: string
}

const Movielist:React.FC<MovieListProps> = ({data,title}) => {
    if(isEmpty(data)){
        return null;
    }
  return (
    <div className='px-4 md:px-12 mt-4 space-y-8'>
        <div>
            <p className='text-white mb-2 text-md md:text-xl lg:text2xl font-semibold'>
                {title}
            </p>
            <div className='grid grid-cols-4 gap-2'>
                {
                    data.map((movie)=>(
                        <MovieCard key={movie._id} data={movie}/>
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default Movielist