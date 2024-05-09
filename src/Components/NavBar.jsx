import React, { useState, useEffect } from "react";
import { auth } from "../firebase";
import { signInWithRedirect, GoogleAuthProvider } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDoorClosed, faDoorOpen } from "@fortawesome/free-solid-svg-icons";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";

function NavBar() {
 
  const [user] = useAuthState(auth);
 

  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithRedirect(auth, provider);
  };

  const signOut = () => {
    auth.signOut();
  };

  return (
    <div className="nav">
      <h3>Rachel's chat app</h3>
      {user? (
        <button className="btn" onClick={signOut} type="button">
          Sign Out 
           <FontAwesomeIcon icon={faDoorOpen} className="door"/>
        </button>
      ) : (
        <button className="google" onClick={googleSignIn}>
          Sign in with Google <FontAwesomeIcon icon={faGoogle} className="goo"/></button>
      )}
    </div>
  );
}

export default NavBar;