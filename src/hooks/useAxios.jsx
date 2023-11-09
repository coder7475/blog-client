// import { useNavigate } from "react-router-dom";
import axios from "axios";
// import { useEffect } from "react";
// import Swal from "sweetalert2";
import auth from '../Firebase/firebase.config';
import {
  signOut
} from "firebase/auth";
const instance = axios.create({
  baseURL: "https://server-programmers-blog.vercel.app/api/v1",
  withCredentials: true,
});

const useAxios = () => {
  
  // const navigate = useNavigate();
  const logOut = () => {
    return signOut(auth);
  };
 
    instance.interceptors.response.use(
      (res) => {
        return res;
      },
      (error) => {
        console.log('error tracked in the interceptor', error.response)
        if (error.response.status === 401 || error.response.status === 403)
        {
        
          logOut().then(() => {            
            // navigate("/");
          })
          .catch(error => console.log(error));
        }
      }
    );
  
  return instance;
};

export default useAxios;
