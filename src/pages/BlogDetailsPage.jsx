import Navbar from "../components/Navbar";
import { useParams } from "react-router-dom";
import useAxios from "/src/hooks/useAxios";
import { useQuery } from "@tanstack/react-query";

const BlogDetailsPage = () => {
  const mainAxios = useAxios();
  const url = `/allBlogs`;
  const blogId = useParams();
  // console.log(blogId.id);
  const getAllBlogs = async () => {
    const res = await mainAxios.get(url);
    return res;
  };
  const { isLoading, data } = useQuery({
    queryKey: ["allBlogs"],
    queryFn: getAllBlogs,
  });

  if (isLoading) return <span>Loading...</span>;

  const blogs = data.data;
  // console.log(blogs);
  const blog = blogs.find((blog) => blog._id === blogId.id);
  // console.log(blog);
  const {
    title,
    author,
    category,
    image,
    email,
    short_description,
    long_description,
  } = blog;
  return (
    <div>
      <Navbar />
      <div className="relative flex w-full max-w-5xl mx-auto flex-col rounded-xl bg-clip-border bg-gray-700 text-slate-200 shadow-md mb-20 mt-10 ">
        <div className="relative shrink-0 overflow-hidden rounded-xl rounded-r-none bg-clip-border bg-gray-700 text-slate-200">
          <figure className="h-2/3">
            <img src={image} alt="image" className="w-full brightness-75" />
          </figure>
        </div>
        <div className="p-6">
          <h6 className="mb-4 block  text-2xl font-semibold uppercase leading-relaxed tracking-normal text-blue-500 antialiased">
            {category}
          </h6>
          <h4 className="mb-2 block  text-3xl font-bold leading-snug tracking-normal text-blue-gray-900 antialiased">
            {title}
          </h4>
          <h6 className="mb-4 block text-xl font-light uppercase leading-relaxed tracking-normal antialiased">
            {author}
          </h6>
          <p className="mb-8 block  text-xl font-normal leading-relaxed text-gray-300 antialiased">
            {short_description}
          </p>
          <p className="mb-8 block  text-xl font-normal leading-relaxed text-gray-300 antialiased">
            {long_description}
          </p>
        </div>
      </div>
      <section className="bg-gray-700 py-8 lg:py-16 antialiased">
        <div className="max-w-2xl mx-auto px-4">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-lg lg:text-2xl font-bold text-white">
              Comments
            </h2>
          </div>
          <form className="mb-6">
            <div className="py-2 px-4 mb-4  rounded-lg rounded-t-lg border bg-gray-800 dark:border-gray-700">
              <label htmlFor="comment" className="sr-only">
                Your comment
              </label>
              <textarea
                id="comment"
                rows="6"
                className="px-0 w-full text-sm border-0 focus:ring-0 focus:outline-none text-white placeholder-gray-400 bg-gray-800"
                placeholder="Write a comment..."
                required
              ></textarea>
            </div>
            <button type="submit" className="btn btn-outline">
              Post comment
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default BlogDetailsPage;
