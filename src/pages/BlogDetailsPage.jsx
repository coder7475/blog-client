import Navbar from "../components/Navbar";
import { useParams } from "react-router-dom";
import useAxios from "/src/hooks/useAxios";
import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import Swal from "sweetalert2";

const BlogDetailsPage = () => {
  const mainAxios = useAxios();
  const url = `/allBlogs`;
  const blogId = useParams();
  const commentsUrl = `/user/allComments/${blogId.id}`;
  // console.log(commentsUrl);
  const { user } = useContext(AuthContext);
  console.log(user);
  // console.log(blogId.id);
  const getAllBlogs = async () => {
    const res = await mainAxios.get(url);
    return res;
  };

  const getAllComments = async () => {
    const res = await mainAxios.get(commentsUrl);
    return res;
  };
  const { isLoading, data } = useQuery({
    queryKey: ["allBlogs"],
    queryFn: getAllBlogs,
  });
  const { isLoading: commentLoading, data: comments } = useQuery({
    queryKey: ["allComments"],
    queryFn: getAllComments,
  });
  if (isLoading) return <span>Loading...</span>;
  const blogs = data.data;
  if (commentLoading) return <span>Loading...</span>;
  const blog = blogs.find((blog) => blog._id === blogId.id);
  // console.log(blog);
  console.log(comments.data);
  const {
    title,
    author,
    category,
    image,
    email,
    short_description,
    long_description,
  } = blog;
  // console.log(email);
  const createComment = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const userComment = form.get("comment");
    // _id, user name, profile picture
    const blogComment = {
      blog_id: blogId.id,
      comment: userComment,
      user_email: user.email,
      user_name: user.displayName,
      user_profile: user.photoURL
    };
    // console.log(blogComment);
    mainAxios.post("/user/create-comment", blogComment).then(() =>
      Swal.fire({
        title: "Success!",
        text: "Successfully commented!",
        icon: "success",
      })
    );
  };
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
      {user?.email === email ? (
        <h1 className="text-center text-3xl font-bold py-8 bg-gray-700 lg:py-16">
          You can&apos;t comment on your own blog
        </h1>
      ) : (
        <section className="bg-gray-700 py-8 lg:py-16 antialiased">
          <div className="max-w-2xl mx-auto px-4">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-lg lg:text-2xl font-bold text-white">
                Comments
              </h2>
            </div>
            <form className="mb-6" onSubmit={createComment}>
              <div className="py-2 px-4 mb-4  rounded-lg rounded-t-lg border bg-gray-800 dark:border-gray-700">
                <label htmlFor="comment" className="sr-only">
                  Your comment
                </label>
                <textarea
                  id="comment"
                  name="comment"
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
      )}
      {
        comments.data.map(comment => <li>d</li>)   
      }
    </div>
  );
};

export default BlogDetailsPage;
