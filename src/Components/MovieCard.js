import React from 'react'
import { TMDB_IMG_CDN } from '../Utils/constants'

const MovieCard = ({posterPath}) => {
  return (
    <div className=' pr-4'>
      <img className='w-48' src={TMDB_IMG_CDN+posterPath} alt='img'/>
    </div>
  )
}

export default MovieCard
