import React, { useEffect } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../Utils/Firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from '../Utils/userSlice';
import { logo } from "../Utils/constants";


const Header = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        console.error(error);
        navigate("/error");
      });
  };
  useEffect(()=>{
   const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
 const{uid, email,displayName,photoURL} = user
    dispatch(addUser({uid:uid, email:email, displayName:displayName, photoURL:photoURL}))
  navigate("/browse")    
  } else {
        dispatch(removeUser())
        navigate("/")
      }
    });
    return ()=>{
unsubscribe()
    }
  },[])
  return (
    <>
      <div className="flex justify-between w-full z-10 absolute px-8 py-2 bg-gradient-to-b from-black">
        <img className="" src={logo} alt="logo" height={100} width={100} />
      { user&& <div className="flex p-3">
        <p className="font-semibold px-3 mt-4 rounded-lg ">{user?.displayName}</p>
          <img
            src={user?.photoURL}
            alt="user icon"
            className="h-10 w-10 mt-2"
          />
          <button className="font-semibold text-white" onClick={handleSignOut}>
            (Sign Out){" "}
          </button>
        </div>}
      </div>
    </>
  );
};

export default Header;
