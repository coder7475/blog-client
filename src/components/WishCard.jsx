import PropTypes from "prop-types"
import { NavLink } from "react-router-dom";
import useAxios from '../hooks/useAxios';
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const WishCard = ({ data }) => {
  // console.log(data);
  const { blog_id, _id, title, category, image, short_description, timestamp } = data;
  const mainAxios = useAxios();
  const navigate = useNavigate();
  
  const handleWishRemove = (id) => {
    // console.log(`Remove ${id}`);
    const url = `/user/remove-from-wishlist/${id}`;
    mainAxios.delete(url).then(() =>
    Swal.fire({
      title: "Success!",
      text: "Successfully Removed from wishlist!",
      icon: "success",
    })
  );
  navigate("/");
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
            <NavLink to={`/${blog_id}`}>View Details</NavLink>
          </button>
          <button className="btn text-white text-lg font-semibold" onClick={() => handleWishRemove(_id)}>
            Remove to Wishlist
          </button>
        </div>
      </div>
    </div>
  );
};

WishCard.propTypes = {
  data: PropTypes.shape({
    _id: PropTypes.any,
    blog_id: PropTypes.any,
    category: PropTypes.any,
    image: PropTypes.any,
    short_description: PropTypes.any,
    timestamp: PropTypes.any,
    title: PropTypes.any,
    user_email: PropTypes.any
  })
}

export default WishCard;