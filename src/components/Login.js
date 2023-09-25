import React, { useState, useRef } from "react";
import { checkuser } from "../utils/checkuser";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { updateProfile } from "firebase/auth";

const Login = () => {
  const auth = getAuth();
  const [isSign, setSignInButton] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  //const username = useRef();
  const email = useRef();
  const password = useRef();
  const username = useRef();

  const handleSign = () => {
    setSignInButton(!isSign);
  };

  const handleSubmit = () => {
    const message = checkuser(email.current.value, password.current.value);
    setErrorMessage(message);
    if (message === "Success") {
      if (isSign) {
        signInWithEmailAndPassword(
          auth,
          email.current.value,
          password.current.value
        )
          .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            console.log(user);
            // ...
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setErrorMessage(errorCode + errorMessage);
          });
      } else {
        createUserWithEmailAndPassword(
          auth,
          email.current.value,
          password.current.value
        )
          .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            console.log(user);
            //dispatch(addUser(user));

            const auth = getAuth();
            updateProfile(auth.currentUser, {
              displayName: username.current.value,
              photoURL: "https://scontent.fdel77-1.fna.fbcdn.net/v/t1.6435-1/34901897_2119497814997103_7799746062205321216_n.jpg?stp=dst-jpg_p160x160&_nc_cat=105&ccb=1-7&_nc_sid=dbb9e7&_nc_ohc=H8A-UcpKNEkAX_n_vFG&_nc_ht=scontent.fdel77-1.fna&oh=00_AfBaKUpdO_V4UxZeesrkBO8c6viiDGzcU319baioYVyZqw&oe=651AB266",
            });
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setErrorMessage(errorCode + errorMessage);
          });
      }
    }
  };

  return (
    <div className="">
      <img
        className="w-full h-full"
        src="https://assets.nflxext.com/ffe/siteui/vlv3/00103100-5b45-4d4f-af32-342649f1bda5/64774cd8-5c3a-4823-a0bb-1610d6971bd4/IN-en-20230821-popsignuptwoweeks-perspective_alpha_website_small.jpg"
        alt=""
      />
      <form
        className="bg-black bg-opacity-80 p-8 absolute top-1/4 left-1/3 w-1/3 flex flex-col rounded-lg text-white"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <h1 className="text-4xl mb-2">{isSign ? "Sign In" : "Sign Up"}</h1>
        {!isSign && (
          <input
            ref={username}
            className="my-2 h-8 rounded-lg bg-slate-700 text-white"
            type="text"
            id="username"
            name="username"
            placeholder="Enter your Full Name"
          />
        )}
        <input
          ref={email}
          className="my-2 h-8 rounded-lg  bg-slate-700 text-white"
          type="email"
          id="email"
          name="email"
          placeholder="Enter your email "
        />
        <input
          ref={password}
          className="my-2 h-8 rounded-lg  bg-slate-700 text-white"
          type="password"
          id="password"
          name="password"
          placeholder="Enter your password"
        />
        <button
          className="bg-red-700 h-8 my-2 rounded-lg"
          onClick={handleSubmit}
        >
          Submit
        </button>
        <p className="text-red-700">{errorMessage}</p>
        <button onClick={handleSign}>
          {isSign
            ? "New to Netflix ? Sign Up Now"
            : "Already Registered,Go back to Sign In"}
        </button>
      </form>
    </div>
  );
};

export default Login;
