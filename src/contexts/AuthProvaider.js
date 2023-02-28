import React, { createContext, useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  signOut,
} from "firebase/auth";
export const authContext = createContext();
const AuthProvaider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [currentUser, setCurrentUser] = useState();
  // signup function
  const singup = async (email, password, username) => {
    const auth = getAuth();
    // create user
    await createUserWithEmailAndPassword(auth, email, password);
    // update profile
    await updateProfile(auth.currentUser, {
      displayName: username,
    });
  };
  // login function
  const login = async (email, password) => {
    const auth = getAuth();
    await signInWithEmailAndPassword(auth, email, password);
  };
  // signup function
  const logout = () => {
    const auth = getAuth();
    signOut(auth);
  };
  const value = { currentUser, singup, login, logout };

  return (
    <authContext.Provider value={value}>
      {!loading && children}
    </authContext.Provider>
  );
};

export default AuthProvaider;
