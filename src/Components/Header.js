import React from "react";
import header from "../Utils/Netflix-Logo.png";
import userIcon from "../Utils/UserIcon.png";
import { signOut } from "firebase/auth";
import { auth } from "../Utils/Firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
const Header = () => {
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
  return (
    <>
      <div className="flex justify-between w-full z-10 absolute px-8 py-2 bg-gradient-to-b from-black">
        <img className="" src={header} alt="logo" height={100} width={100} />
      { user&& <div className="flex p-3">
        <p className="font-semibold px-3 mt-4">{user?.displayName}</p>
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
