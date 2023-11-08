import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
function PrivateRoute({ children }) {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  // console.log(location);
  if (loading) return <Skeleton count={10} />;

  if (user) return children;

  return <Navigate state={location.pathname} to="/login"></Navigate>;
}

PrivateRoute.propTypes = {
  children: PropTypes.object,
};

export default PrivateRoute;
