import Navbar from "../components/Navbar";
import useAxios from "/src/hooks/useAxios";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import BlogCard from "../components/BlogCard";

const AllBlogs = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [category, setCategory] = useState("")
  const mainAxios = useAxios();
  const blogsPerPage = 6;
  const url = `/allBlogs?page=${currentPage}&size=${blogsPerPage}`;
  const filter = `/allBlogs?category=${category}`
  const totalUrl = "/totalBlogs";
  console.log(category);
  const handleCategory = async(e)=> {
    e.preventDefault();
    setCategory(e.target.value);
  }

  const getTotalBlogs = async () => {
    const res = await mainAxios.get(totalUrl);
    return res;
  };

  const getAllBlogs = async () => {
    let finURL="";
    if (category) 
      finURL = filter;
    else
      finURL = url;
    const res = await mainAxios.get(finURL);
    return res;
  };

  const totalBlogs = useQuery({
    queryKey: ["totalBlogs"],
    queryFn: getTotalBlogs,
  });
  const allBlogs = useQuery({
    queryKey: ["allBlogs", currentPage, category],
    queryFn: getAllBlogs,
  });
  if (totalBlogs.isPending || allBlogs.isPending) return <span>Loading</span>;
  const { total } = totalBlogs.data.data;
  const totalPages = Math.ceil(total / blogsPerPage);
  const pages = [...Array(totalPages).keys()];
  // console.log(pages);
  const handleNext = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage(currentPage + 1);
    }
    setCategory("");
  };
  const handlePrev = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
    setCategory("");

  };

  return (
    <>
      <Navbar />
      <h1 className="text-center font-bold text-5xl py-10">All Blog Posts</h1>

      <div className="text-center">
        <div className="text-lg font-medium">
          <span>Filter by: {" "}</span>
          <select
            id="category"
            name="category"
            value=""
            onChange={handleCategory}
          >

            <option value="" disabled>Select Category</option>
            <option value="Data Science">Data Science</option>
            <option value="Front End Development">Front End Development</option>
            <option value="Machine Learning">Machine Learning</option>
            <option value="Software Development">Software Development</option>
            <option value="DevOps">DevOps</option>
            <option value="Version Control">Version Control</option>
            <option value="Algorithms">Algorithms</option>
            <option value="Cybersecurity">Cybersecurity</option>
            <option value="Containerization">Containerization</option>
            
          </select>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 max-w-5xl mx-auto my-10 gap-3">
        {allBlogs.data.data.map((blog) => (
          <BlogCard key={blog._id} blog={blog}></BlogCard>
        ))}
      </div>
      <div className="flex gap-1 justify-center mb-10">
        <button onClick={handlePrev} className="btn btn-outline">
          Prev
        </button>
        {pages.map((page) => (
          <button
            key={page}
            className={
              page === currentPage
                ? "btn btn-outline bg-gray-600"
                : "btn btn-outline"
            }
          >
            {page + 1}
          </button>
        ))}
        <button onClick={handleNext} className="btn btn-outline">
          Next
        </button>
      </div>
    </>
  );
};

export default AllBlogs;
