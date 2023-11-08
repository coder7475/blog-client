import { useContext } from "react";
import { AuthContext } from '../providers/AuthProvider';

import { Navigate, useLocation } from "react-router-dom";
import PropTypes from "prop-types";

function PrivateRoute({ children }) {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  // console.log(location);
  if (loading)
    return (
      <div className="w-full flex justify-center items-center ">
        <span className="loading loading-ring loading-xs"></span>
        <span className="loading loading-ring loading-xs"></span>
        <span className="loading loading-ring loading-sm"></span>
        <span className="loading loading-ring loading-sm"></span>
        <span className="loading loading-ring loading-md"></span>
        <span className="loading loading-ring loading-md"></span>
        <span className="loading loading-ring loading-lg"></span>
        <span className="loading loading-ring loading-lg"></span>
        
      </div>
    );

  if (user) return children;

  return <Navigate state={location.pathname} to="/login" ></Navigate>;
}

PrivateRoute.propTypes = {
  children: PropTypes.object,
};

export default PrivateRoute;