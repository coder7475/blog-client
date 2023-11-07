import PropTypes from "prop-types"
import { NavLink } from "react-router-dom";

const BlogCard = ({ blog }) => {
  const { _id, title, image, short_description, category } = blog;
  // console.log(blog);
  return (
    <div className="card justify-center items-center shadow-xl border-2 border-gray-400 bg-slate-600">
      <figure className="p-5 w-full">
        <img src={image} alt="service" className="rounded-xl h-64 w-full brightness-75" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{title}</h2>
        <h2 className="text-xl">
          <span className="font-semibold">Category: </span>
          {category}
        </h2>

        <p className="text-xl py-2">{short_description}</p>
        <div className="card-actions">
          <button className="btn bg-burntSienna text-white text-lg font-semibold">
            <NavLink to={`/${_id}`}>View Details</NavLink>
          </button>
          <button className="btn bg-burntSienna text-white text-lg font-semibold">
            <NavLink to={`/${_id}`}>Add to Wishlist</NavLink>
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
    short_description: PropTypes.any,
    title: PropTypes.any
  })
}





export default BlogCard;
