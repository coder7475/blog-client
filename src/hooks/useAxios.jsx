// import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";
// import Swal from "sweetalert2";

const instance = axios.create({
  baseURL: "https://server-programmers-blog.vercel.app/api/v1",
  withCredentials: true,
});

const useAxios = () => {
  // const { logOut } = useAuth();
  // const navigate = useNavigate();

  useEffect(() => {
    instance.interceptors.response.use(
      (res) => {
        return res;
      },
      (error) => {
        const err = error.response;
        console.log(err);
        if (err.status === 401 || err.status === 403) {
        
          // logOut().then(() => {
          //   Swal.fire({
          //     icon: "error",
          //     title: "Oops...",
          //     text: "Invalid Token!",
          //   });
          //   navigate("/");
          // });
        }
      }
    );
  }, []);
  return instance;
};

export default useAxios;
