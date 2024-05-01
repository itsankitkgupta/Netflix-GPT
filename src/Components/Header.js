import React from 'react'
import header from "../Utils/Netflix-Logo.png"
const Header = () => {
  return (
    <div className='z-10 absolute px-8 py-2 bg-gradient-to-b from-black'>
      <img className='' src={header} alt="logo" height={300} width={300}/>
    </div>
  )
}

export default Header
