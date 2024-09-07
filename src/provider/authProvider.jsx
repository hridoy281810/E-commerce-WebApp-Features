import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  GoogleAuthProvider,
  updateProfile
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";

const auth = getAuth(app);
export const AuthContext = createContext(null);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
const [user, setUser] = useState(null);
const [loading, setLoading] = useState(true);

const createUser = (email, password) => {
  return createUserWithEmailAndPassword(auth, email, password);
};

const updateUserProfile = (name) => {
  setLoading(true);
  return updateProfile(auth.currentUser, {
    displayName: name
  }).finally(() => setLoading(false));
};

const signIn = (email, password) => {
  setLoading(true);
  return signInWithEmailAndPassword(auth, email, password);
};

const googleLogin = () => {
  return signInWithPopup(auth, googleProvider);
};

useEffect(() => {
  const unsubscribe = onAuthStateChanged(auth, loggedUser => {
    setUser(loggedUser);
    setLoading(false);
  });
  return () => unsubscribe();
}, []);

const logout = () => {
  setLoading(true);
  return signOut(auth).finally(() => setLoading(false));
};

const authInfo = {
  user,
  createUser,
  setLoading,
  loading,
  signIn,
  logout,
  googleLogin,
  updateUserProfile
};

return (
  <AuthContext.Provider value={authInfo}>
    {children}
  </AuthContext.Provider>
);
};

export default AuthProvider;
