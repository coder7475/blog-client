import useAxios from "/src/hooks/useAxios";
import { useQuery } from "@tanstack/react-query";
import BlogCard from "./BlogCard";
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const FeaturedBlogs = () => {
  const mainAxios = useAxios();
  const url = "/featuredBlogs";

  const getFeaturedBlogs = async () => {
    const res = await mainAxios.get(url);
    return res;
  };

  const { isPending, isError, data: latest , error  } = useQuery({
    queryKey: ["featuredBlogs"],
    queryFn: getFeaturedBlogs
  });
  
  if (isPending) {
    return <Skeleton count={10} />
  }

  if (isError) {
    return <span>Error: {error.message}</span>
  }

  // console.log(latest.data);
  return (
    <div className="min-h-screen max-w-7xl px-10 mx-auto py-10 bg-gradient-to-r from-zinc-400 to-slate-500 rounded-lg">
      <h1 className="text-5xl font-bold text-center my-5">Featured Blogs</h1>
      <div className="flex flex-col lg:flex-row gap-4 my-10 ">
        {
          latest.data.slice(0,3).map((blog) => <BlogCard blog={blog} key={blog._id}></BlogCard>)
        }
      </div>
    </div>
  );
};


export default FeaturedBlogs;
