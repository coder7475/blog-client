import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="navbar bg-base-300 font-bold min-h-fit py-4">
      <div className="flex-1">
        <NavLink to={`/`} className="btn btn-ghost normal-case text-2xl">
          Programmers Blog
        </NavLink>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-3 btn text-xl">
          <li>
            <NavLink to={`/`}>Home</NavLink>
          </li>
          <li>
            <NavLink to={`/addBlog`}>Add Blog</NavLink>
          </li>
          <li>
            <NavLink to={`/allBlogs`}>All Blogs</NavLink>
          </li>
          <li>
            <NavLink to={`/featuredBlogs`}>Featured Blogs</NavLink>
          </li>
          <li>
            <NavLink to={`/wishlist`}>Wishlist</NavLink>
          </li>
          <li>
            <NavLink to={`/login`}>Login</NavLink>
          </li>
          <li>
            <NavLink to={`/register`}>Register</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
