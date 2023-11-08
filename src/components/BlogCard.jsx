import PropTypes from "prop-types"
import { NavLink } from "react-router-dom";
import { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import useAxios from '/src/hooks/useAxios';
import Swal from "sweetalert2";

const BlogCard = ({ blog }) => {
  const { _id, title, image, short_description, category, timestamp, long_description } = blog;
  // console.log(blog);
  const { user } = useContext(AuthContext);
  const mainAxios = useAxios();
  const url = `/user/add-to-wishlist`;

  // console.log(user);
  const handleWishlist = () => {
    // console.log('Clicked Wishlist');
    const userWish = {
      blog_id: _id,
      user_email: user.email,
      title,
      image,
      short_description,
      category,
      timestamp,
      long_description
    }
    // console.log(userWish);
    mainAxios.post(url, userWish).then(() =>
      Swal.fire({
        title: "Success!",
        text: "Successfully added to wishlist!",
        icon: "success",
      })
    );
  }
  return (
    <div className="card justify-center items-center shadow-xl border-2 border-gray-400 bg-slate-600">
      <figure className="p-5 w-full">
        <img src={image} alt="service" className="rounded-xl h-64 w-full brightness-75" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{title}</h2>
        <h2 className="card-title font-thin">Published: {timestamp.slice(0, 10)}     {timestamp.slice(11,16)}</h2>
        <h2 className="text-xl">
          {/* <span className="font-semibold">Category: </span> */}
          {category}
        </h2>

        <p className="text-xl py-2 font-light">{short_description}</p>
        <div className="card-actions">
          <button className="btn text-white text-lg font-semibold">
            <NavLink to={`/${_id}`}>View Details</NavLink>
          </button>
          <button className="btn text-white text-lg font-semibold" onClick={handleWishlist}>
            Add to Wishlist
          </button>
        </div>
      </div>
    </div>
  );
};

BlogCard.propTypes = {
  blog: PropTypes.shape({
    _id: PropTypes.any,
    category: PropTypes.any,
    image: PropTypes.any,
    long_description: PropTypes.any,
    short_description: PropTypes.any,
    timestamp: PropTypes.any,
    title: PropTypes.any
  })
}


export default BlogCard;
