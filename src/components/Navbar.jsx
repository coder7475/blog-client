import { NavLink } from "react-router-dom";
import AuthContext from "../contexts/AuthContext";
import { useContext } from "react";
import LoggedState from "./LoggedState";

const Navbar = () => {
  const { user } = useContext(AuthContext);
  console.log(user);
  
  return (
    <div className="flex bg-base-300 font-lg py-4 flex-col lg:flex-row mx-auto">
      <div className="mx-auto flex items-center">
        <NavLink to={`/`} className="font-bold normal-case text-3xl">
          Programmers Blog
        </NavLink>
      </div>
      <div className="mx-auto my-10">
        <ul className="flex flex-col lg:flex-row gap-5 justify-center items-center px-3 text-xl">
          <li className="">
            <NavLink
              to={`/`}
              className={({ isActive, isPending }) =>
                isActive
                  ? "font-black border-2 p-2"
                  : isPending
                  ? "underline"
                  : ""
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to={`/addBlog`}
              className={({ isActive, isPending }) =>
                isActive
                  ? "font-black border-2 p-2"
                  : isPending
                  ? "underline"
                  : ""
              }
            >
              Add Blog
            </NavLink>
          </li>
          <li>
            <NavLink
              to={`/allBlogs`}
              className={({ isActive, isPending }) =>
                isActive
                  ? "font-black border-2 p-2"
                  : isPending
                  ? "underline"
                  : ""
              }
            >
              All Blogs
            </NavLink>
          </li>
          <li>
            <NavLink
              to={`/featuredBlogs`}
              className={({ isActive, isPending }) =>
                isActive
                  ? "font-black border-2 p-2"
                  : isPending
                  ? "underline"
                  : ""
              }
            >
              Featured Blogs
            </NavLink>
          </li>
          <li>
            <NavLink
              to={`/wishlist`}
              className={({ isActive, isPending }) =>
                isActive
                  ? "font-black border-2 p-2"
                  : isPending
                  ? "underline"
                  : ""
              }
            >
              Wishlist
            </NavLink>
          </li>
          {user ? (
            <LoggedState />
          ) : (
            <div>
              <li>
                <NavLink
                  to={`/login`}
                  className={({ isActive, isPending }) =>
                    isActive
                      ? "font-black border-2 p-2"
                      : isPending
                      ? "underline"
                      : ""
                  }
                >
                  Login
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={`/register`}
                  className={({ isActive, isPending }) =>
                    isActive
                      ? "font-black border-2 p-2"
                      : isPending
                      ? "underline"
                      : ""
                  }
                >
                  Register
                </NavLink>
              </li>
            </div>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
