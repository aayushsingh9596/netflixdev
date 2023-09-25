import React from "react";
import { getAuth, signOut } from "firebase/auth";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useNavigate } from "react-router";

const Header = () => {

  const user=useSelector(store=>store.user);

  const navigate=useNavigate();


  const handleClick = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        console.log("Sign Out Successful");
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
        console.log("Sign In Not Successful",error)
      });
  };
  return (
    <div className="fixed z-50 flex  bg-black w-full bg-gradient-to-b from-black justify-between items-center h-16">
      <img className="w-32 z-10 ml-10"
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="Netflix__logo"
      />
      {user&&<div className="flex z-10">

      <button className="bg-red-900 text-white w-20 h-8 rounded-lg mr-4" onClick={()=>{
         navigate("/browse");
        }}>Home</button>

      <button className="bg-red-900 text-white w-24 h-8 rounded-lg mr-4" onClick={()=>{
         navigate("/playlistPage");
        }}>MyPlayList</button>


        <button className="bg-red-900 text-white w-24 h-8 rounded-lg mr-4" onClick={()=>{
         navigate("/GPTSearch");
        }}>Search</button>
        <img
        onClick={() => handleClick()}
        className="w-8 h-8 mr-10 z-10"
        src="https://occ-0-2484-2186.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABY20DrC9-11ewwAs6nfEgb1vrORxRPP9IGmlW1WtKuaLIz8VxCx5NryzDK3_ez064IsBGdXjVUT59G5IRuFdqZlCJCneepU.png?r=229"
        alt="Sign__Out"
      /></div>}
    </div>
  );
};

export default Header;
