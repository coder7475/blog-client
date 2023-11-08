import { useContext } from "react";
import { AuthContext } from '../providers/AuthProvider';

function LoggedState() {
  const { user, logOut } = useContext(AuthContext);
  // console.log(user.photoURL);

  return (
    <div className="flex flex-col md:flex-row justify-center items-center gap-5 flex-1">
      <div className="avatar">
        <div className="w-12 rounded-full">
          <img src={user.photoURL} className="bg-white" />
        </div>
      </div>
      
          <button className="" onClick={logOut}>
            LogOut
          </button>
      
    </div>
  );
}

export default LoggedState;
