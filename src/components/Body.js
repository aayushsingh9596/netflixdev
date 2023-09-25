import React, { useEffect } from "react";
import Login from "./Login";
import { Route, Routes } from "react-router-dom";
import Browse from "./Browse";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { removeUser, addUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";
import WatchPage from "./WatchPage";
import PlaylistPage from "./PlaylistPage";
import GPTSearchPage from "./GPTSearchPage";

const Body = () => {
  const auth = getAuth();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        dispatch(
          addUser({
            userid: user.uid,
            email: user.email,
            name: user.displayName,
            imageUrl: user.photoURL,
          })
        );
        navigate("/browse");

        // ...
      } else {
        // User is signed out
        // ...
        dispatch(removeUser());
        navigate("/");
      }
    });
  }, [auth]);

  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/browse" element={<Browse />}></Route>
        <Route path="/playlistPage" element={<PlaylistPage />}></Route>
        <Route path="/watchPage/:key" element={<WatchPage />}></Route>
        <Route path="/GPTSearch" element={<GPTSearchPage />}></Route>
      </Routes>
    </div>
  );
};

export default Body;
