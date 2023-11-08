import PropTypes from "prop-types";
import { onAuthStateChanged, signInWithPopup } from "firebase/auth";
import { 
  signOut,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
} from "firebase/auth";
import { useEffect, useState } from "react";
import auth from "../Firebase/firebase.config";
import Swal from "sweetalert2";
import useAxios from "/src/hooks/useAxios";
import { createContext } from "react";

export const AuthContext = createContext();

function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  // console.log(user);
  const mainAxios = useAxios();

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      // console.log("user in the auth state changed", currentUser);
      const userMail = currentUser?.email || user?.email;
      const payload = { email: userMail };
      setUser(currentUser);
      // console.log(currentUser);
      setLoading(false);
      if (currentUser) {
        mainAxios.post("/access-token", payload)
          .then(res => 
              console.log(res.data)
            )
      } else {
        mainAxios.post("/clear-token", payload)
          .then(res => console.log(res.data));
      }
      
    });
    return () => unSubscribe();
  }, [mainAxios, user?.email]);

  // implement google sign in
  const provider = new GoogleAuthProvider();
  const googleSignIn = () => {
    setLoading(true);

    return signInWithPopup(auth, provider)
      .then(() => {
        Swal.fire({
          title: "Success!",
          text: "You have successfully logged in!",
          icon: "success",
        })
      }
      )
      .catch(() =>
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
        })
      );
  };

  const logOut = () => {
    setUser(null);
    setLoading(true);
    return signOut(auth);
  };

  const Register = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password)
  }
  
  const login = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const authInfo = {
    user,
    loading,
    googleSignIn,
    logOut,
    Register,
    login
  };

  return (
    <div>
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    </div>
  );
}

AuthProvider.propTypes = {
  children: PropTypes.object,
};

export default AuthProvider;
