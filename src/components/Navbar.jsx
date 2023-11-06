import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="flex bg-base-300 font-semibold py-4 flex-col lg:flex-row mx-auto">
      <div className="mx-auto flex items-center">
        <NavLink to={`/`} className="normal-case text-3xl">
          Programmers Blog
        </NavLink>
      </div>
      <div className="mx-auto">
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
            <NavLink to={`/allBlogs`} className={({ isActive, isPending }) =>
              isActive
                ? "font-black border-2 p-2"
                : isPending
                ? "underline"
                : ""
            }>All Blogs</NavLink>
          </li>
          <li>
            <NavLink to={`/featuredBlogs`} className={({ isActive, isPending }) =>
              isActive
                ? "font-black border-2 p-2"
                : isPending
                ? "underline"
                : ""
            }>Featured Blogs</NavLink>
          </li>
          <li>
            <NavLink to={`/wishlist`} className={({ isActive, isPending }) =>
              isActive
                ? "font-black border-2 p-2"
                : isPending
                ? "underline"
                : ""
            }>Wishlist</NavLink>
          </li>
          <li>
            <NavLink to={`/login`} className={({ isActive, isPending }) =>
              isActive
                ? "font-black border-2 p-2"
                : isPending
                ? "underline"
                : ""
            }>Login</NavLink>
          </li>
          <li>
            <NavLink to={`/register`} className={({ isActive, isPending }) =>
              isActive
                ? "font-black border-2 p-2"
                : isPending
                ? "underline"
                : ""
            }>Register</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
