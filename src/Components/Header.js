import React, { useEffect } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../Utils/Firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from "../Utils/userSlice";
import { SUPPORTED_LANGUAGES, logo } from "../Utils/constants";
import { toggleGPTSearchView } from "../Utils/GPTSlice";
import { changeLanguage } from "../Utils/configSlice";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const gptShowValue = useSelector(store=>store.GPT.showGPTSearch)
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
  const handleGPTSearchClick = () => {
    dispatch(toggleGPTSearchView());
  };
  const handlelanguageChange=(e)=>{
dispatch(changeLanguage(e.target.value))
  }
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => {
      unsubscribe();
    };
  }, []);
  return (
    <>
      <div className="flex justify-between w-full z-10 absolute px-8 py-2 bg-gradient-to-b from-black">
        <img className="" src={logo} alt="logo" height={100} width={100} />
        {user && (
          <div className="flex p-3">
            {gptShowValue&&(
            <select className="p-2 bg-gray-600 text-white m-2" onChange={handlelanguageChange}>
              {SUPPORTED_LANGUAGES.map((lang, idx) => {
                return (
                  <option value={lang.identifier} key={idx}>
                    {lang.name}
                  </option>
                );
              })}
            </select>
)}
            <button
              className="text-xl font-semibold text-white py-2 px-4 rounded-sm my-2 -mr-1 bg-purple-500"
              onClick={handleGPTSearchClick}
            >
          { gptShowValue? "Home Page":'GPT Search'}
            </button>
            <p className="font-semibold px-3 mt-4 rounded-lg ">
              {user?.displayName}
            </p>
            <img
              src={user?.photoURL}
              alt="user icon"
              className="h-10 w-10 mt-2"
            />
            <button
              className="font-semibold text-white"
              onClick={handleSignOut}
            >
              (Sign Out){" "}
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default Header;
