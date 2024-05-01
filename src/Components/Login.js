import Header from "./Header";
import backgroundImage from "../Utils/Netflix-background.jpg";
import { useState } from "react";

const Login = () => {
  const [isSignInForm, setisSignInForm] = useState(true);
  const toggleSignInForm = () => {
    setisSignInForm(!isSignInForm);
  };
  return (
    <div>
      <Header />
      <div>
        <img className="absolute" src={backgroundImage} alt="back" />
      </div>
      <form className="p-12 bg-black absolute w-3/12 my-36 mx-auto right-0 left-0 text-white bg-opacity-80">
        <h1 className="font-bold text-3xl py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
            
     { !isSignInForm&&  <input
          type="text"
          placeholder="Your full name"
          className="p-4 my-3 w-full bg-gray-700"
        />}
        <input
          type="text"
          placeholder="name@gmail.com"
          className="p-4 my-3 w-full bg-gray-700"
        />
        <input
          type="password"
          placeholder="Password.."
          className="p-4 my-3 w-full bg-gray-700"
        />
        <button className="p-4 my-6 bg-red-500 w-full rounded-lg hover:bg-red-700 transition-all">
        {isSignInForm ? "Sign In" : "Sign Up"}

        </button>
        <p className="py-4 text-black-70">
          {isSignInForm?"New to Netflix? ":""}
          <span
            className="text-blue-300 hover:cursor-pointer hover:text-red-500 transition-all"
            onClick={toggleSignInForm}
          >
          {isSignInForm ? "Sign In Now" : "Already Registered Sign Up now"}

          </span>
        </p>
      </form>
    </div>
  );
};

export default Login;
