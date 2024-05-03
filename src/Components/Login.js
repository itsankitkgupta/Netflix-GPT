import React, { useRef, useState } from "react";
import Header from "./Header";
import backgroundImage from "../Utils/Netflix-background.jpg";
import { checkValidation } from "../Utils/Validate";
import { createUserWithEmailAndPassword,signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../Utils/Firebase";
import { useNavigate } from "react-router-dom";
import {updateProfile } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser } from "../Utils/userSlice";
import { UserAvtar } from "../Utils/constants";
const Login = () => {
  const dispatch = useDispatch()
  const [isSignInForm, setisSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const name = useRef()
  const email = useRef(null);
  const password = useRef(null);
  const navigate = useNavigate()

  const toggleSignInForm = () => {
    setisSignInForm(!isSignInForm);
  };

  const handleButtonClick = () => {
    const message = checkValidation(email.current.value, password.current.value);
    setErrorMessage(message);
    if (message) return;
    if (!isSignInForm) {
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
      .then((userCredential) => {
        const user = userCredential.user;
      
        updateProfile(user, { 
          displayName: name.current.value, 
          photoURL: UserAvtar
        }).then(() => {
          const{uid, email,displayName,photoURL} = auth.currentUser
         dispatch(addUser({uid:uid, email:email, displayName:displayName, photoURL:photoURL}))
          navigate("/browse");
        }).catch((error) => {
          setErrorMessage(error.message);
        });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrorMessage(`${errorCode}: ${errorMessage}`);
        // Handle error
      })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode,errorMessage)
          // Handle error
        });
    } else {
      signInWithEmailAndPassword(auth,email.current.value, password.current.value)
  .then((userCredential) => {
    const user = userCredential.user;
    navigate("/browse")
})
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorCode,errorMessage)
  });
    }
  };

  return (
    <div>
      <Header />
      <div>
        <img className="absolute" src={backgroundImage} alt="back" />
      </div>
      <form onSubmit={(e) => e.preventDefault()} className="p-12 bg-black absolute w-3/12 my-36 mx-auto right-0 left-0 text-white bg-opacity-80">
        <h1 className="font-bold text-3xl py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>

        {!isSignInForm && (
          <input
          ref={name}
            type="text"
            placeholder="Your full name"
            className="p-4 my-3 w-full bg-gray-700"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="name@gmail.com"
          className="p-4 my-3 w-full bg-gray-700"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password.."
          className="p-4 my-3 w-full bg-gray-700"
        />
        <p className="text-red-700 font-semibold mt-3">{errorMessage}</p>
        <button className="p-4 my-6 bg-red-500 w-full rounded-lg hover:bg-red-700 transition-all" onClick={handleButtonClick}>
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-4 text-black-70">
          {isSignInForm ? "New to Netflix? " : ""}
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
