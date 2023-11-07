
import Navbar from '../components/Navbar';
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

  if (isLoading)
    return <span>Loading...</span>

  const blogs = data.data;
  // console.log(blogs);
  const blog = blogs.find(blog => blog._id === blogId.id);
  // console.log(blog);
  const { title, author, category, image, email, short_description, long_description } = blog;
  return (
    <div>
      <Navbar/>
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
    </div>
  );
};

export default BlogDetailsPage;