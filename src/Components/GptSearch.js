import React from 'react'
import GPTSearchBar from './GPTSearchBar'
import GPTSearchMovieSuggestions from './GPTSearchMovieSuggestions'
import backgroundImage from "../Utils/Netflix-background.jpg";

const GptSearch = () => {
  return (
    <div>
         <div>
        <img className="absolute -z-10" src={backgroundImage} alt="back" />
      </div>
    <GPTSearchBar/>
    <GPTSearchMovieSuggestions/>
    </div>
  )
}

export default GptSearch
