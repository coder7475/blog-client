import useAxios from "/src/hooks/useAxios";
import { useQuery } from "@tanstack/react-query";
import BlogCard from "./BlogCard";

const RecentBlogs = () => {
  const mainAxios = useAxios();
  const url = "/latestBlogs";

  const getLatestBlogs = async () => {
    const res = await mainAxios.get(url);
    return res;
  };

  const { isPending, isError, data: latest , error  } = useQuery({
    queryKey: ["latestBlogs"],
    queryFn: getLatestBlogs,
  });
  
  if (isPending) {
    return <span>Loading.....</span>
  }

  if (isError) {
    return <span>Error: {error.message}</span>
  }

  console.log(latest.data);
  return (
    <div className="min-h-screen max-w-5xl mx-auto">
      <h1 className="text-5xl font-bold text-center my-5">Recent Blog Posts</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-10">
        {
          latest.data.map((blog) => <BlogCard blog={blog} key={blog._id}></BlogCard>)
        }
      </div>
    </div>
  );
};

export default RecentBlogs;
