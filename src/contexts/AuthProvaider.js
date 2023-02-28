import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import React, { createContext, useContext, useEffect, useState } from "react";
import auth from "../firebase.init";
export const authContext = createContext();
export const useAuth = () => {
  return useContext(authContext);
};
const AuthProvaider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [currentUser, setCurrentUser] = useState();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setLoading(false);
    });
    return unsubscribe;
  }, []);
  // signup function
  const singup = async (email, password, username) => {
    // create user
    await createUserWithEmailAndPassword(auth, email, password);
    // update profile
    await updateProfile(auth.currentUser, {
      displayName: username,
    });
    const user = auth.currentUser;
    setCurrentUser({
      ...user,
    });
  };
  // login function
  const login = async (email, password) => {
    await signInWithEmailAndPassword(auth, email, password);
  };
  // signup function
  const logout = () => {
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
