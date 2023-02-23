import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import React, {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import { toast } from "react-toastify";
import { auth } from "../firebase";
import { ACTIONS_USER } from "../helpers/const";

const authContext = createContext();
export const useAuth = () => useContext(authContext);

const INIT_STATE = {
  user: "",
};

const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case ACTIONS_USER.CHECK_USER:
      return { ...state, user: action.payload };

    default:
      return state;
  }
};

const AuthContext = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);
  const [userEmail, setUserEmail] = useState("");

  //!  Authentication
  const googleProvider = new GoogleAuthProvider();

  const authWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (error) {
      console.log(error);
    }
  };

  const checkUser = () => {
    onAuthStateChanged(auth, (user) => {
      dispatch({
        type: ACTIONS_USER.CHECK_USER,
        payload: user,
      });
    });
  };

  useEffect(() => {
    checkUser();
  }, []);

  const logOut = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.log(error);
    }
  };

  // ! Registration

  const register = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // ! LOGIN
  const logIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
    setUserEmail(currentUser);
  });

  useEffect(() => {
    return () => {
      unsubscribe();
    };
  }, []);

  const values = {
    authWithGoogle,
    register,
    logIn,
    logOut,
    userEmail,
    user: state.user,
  };

  return <authContext.Provider value={values}>{children}</authContext.Provider>;
};

export default AuthContext;
