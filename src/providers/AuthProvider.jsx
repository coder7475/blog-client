import PropTypes from "prop-types";
import { onAuthStateChanged, signInWithPopup } from "firebase/auth";
import { GoogleAuthProvider, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import AuthContext from "../contexts/AuthContext";
import auth from "../Firebase/firebase.config";
import Swal from "sweetalert2";

function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  // console.log(user);

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      // console.log("user in the auth state changed", currentUser);
      setUser(currentUser);
      setLoading(false);
    });
    return () => unSubscribe();
  }, []);

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

  const authInfo = {
    user,
    loading,
    googleSignIn,
    logOut,
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
