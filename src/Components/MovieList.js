import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({title, movies}) => {
  return (
    <div className='' >
        <div className='overflow-x-scroll pl-1'>
<h1 className='font-semibold text-2xl text-white'>{title}</h1>
      </div>
      <div className='flex ml-3'>
        {
           movies&& movies.map(images=><MovieCard key={images.id} posterPath={images.poster_path}/>
            )
        }
      </div>
    </div>
  )
}

export default MovieList
