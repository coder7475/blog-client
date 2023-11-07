import useAxios from "/src/hooks/useAxios";
import { useQuery } from "@tanstack/react-query";
import BlogCard from "./BlogCard";

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
    return <span>Loading.....</span>
  }

  if (isError) {
    return <span>Error: {error.message}</span>
  }

  // console.log(latest.data);
  return (
    <div className="min-h-screen max-w-5xl mx-auto py-10">
      <h1 className="text-5xl font-bold text-center my-5">Featured Blogs</h1>
      <div className="flex flex-col lg:flex-row gap-4 my-10">
        {
          latest.data.slice(0,3).map((blog) => <BlogCard blog={blog} key={blog._id}></BlogCard>)
        }
      </div>
    </div>
  );
};


export default FeaturedBlogs;
