import React from 'react'

const VideoTitle = ({title,overview}) => {
  return (
    <div className='w-screen aspect-video pt-[20%] px-24 absolute text-white bg-gradient-to-r from-black'>
      <h1 className='text-3xl font-bold w-1/3'>{title}</h1>
      <p className='py-6 text-lg w-1/3'>{overview}</p>
      <div className='my-4'>
 <button className='bg-white text-black p-4 px-16 font-serif text-lg rounded-sm hover:bg-opacity-80'>▶️Play Now</button>
 <button className='mx-3 bg-gray-500 text-white p-4 px-16 font-serif text-lg bg-opacity-70 rounded-sm'>More Info</button>

      </div>
    </div>
  )
}

export default VideoTitle
