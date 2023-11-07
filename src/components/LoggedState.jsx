import { useContext } from "react";
import { NavLink } from "react-router-dom";
import AuthContext from "../contexts/AuthContext";

function LoggedState() {
  const { user } = useContext(AuthContext);
  // console.log(user.photoURL);

  return (
    <div className="flex flex-col md:flex-row justify-center items-center gap-5 flex-1">
      <div className="avatar">
        <div className="w-12 rounded-full">
          <img src={user.photoURL} className="bg-white" />
        </div>
      </div>
      
        <NavLink to={`/login`}>
          <button className="">
            LogOut
          </button>
        </NavLink>
      
    </div>
  );
}

export default LoggedState;
