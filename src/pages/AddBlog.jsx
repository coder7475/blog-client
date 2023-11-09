import Swal from "sweetalert2";
import Navbar from '../components/Navbar';
import { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import useAxios from '../hooks/useAxios';

const AddBlog = () => {
  const {user} = useContext(AuthContext);
  const mainAxios = useAxios();
  const url = `/user/create-blog`;
  // console.log(commentsUrl);
  console.log(user);
  const handleAddBlog = (e) => {

    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const title = form.get("title");
    const image = form.get("image");
    const category = form.get("category");
    const d = new Date();
    const timestamp = d.toISOString();
    const profilePic = user.photoURL;
    // console.log(timestamp);
    const short_description = form.get("short_description");
    const long_description = form.get("long_description");
    const wordCount = long_description.trim().split(/\s+/).length;
    const newBlog = {
      title,
      image,
      category,
      email: user.email,
      short_description,
      long_description,
      timestamp,
      wordCount,
      profilePic
    }
    // console.log(newBlog);
    mainAxios.post(url, newBlog)
      .then(() => {
        Swal.fire({
          title: "Success!",
          text: "Your Blog has been added",
          icon: "success",
        })
      })
  }

  return (
    <main>
      <Navbar></Navbar>
    <section className="min-h-screen bg-gray-500">
      <div className="py-8 px-4 mx-auto max-w-2xl">
        <h2 className="mb-4 text-5xl font-bold text-gray-300 text-center">
          Add a new Blog
        </h2>

        <form 
          className="form-control"
          onSubmit={handleAddBlog}
        >
          <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
            <div className="sm:col-span-2">
              <label
                htmlFor="title"
                className="block mb-2 text-xl font-medium text-gray-200"
              >
               Title 
              </label>
              <input
                type="text"
                name="title"
                id="title"
                className="bg-gray-200 border border-gray-400 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                placeholder="Type Blog Title"
                required
              />
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="image"
                className="block mb-2 text-xl font-medium text-gray-200"
              >
                Blog Image URL
              </label>
              <input
                type="text"
                name="image"
                id="image"
                className="bg-gray-200 border border-gray-400 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                placeholder="Paste Image URL here"
                required
              />
            </div>
            <div className="col-span-2">
              <label
                htmlFor="category"
                className="block mb-2 text-xl font-medium text-gray-200"

              >
                Category
              </label>
              <select
                id="category"
                name="category"
                className="bg-gray-200 border border-gray-400 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                required
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
            <div className="sm:col-span-2">
              <label
                htmlFor="short_description"
                className="block mb-2 text-xl font-medium text-gray-200"
              >
               Short Description
              </label>
              <textarea
                id="short_description"
                name="short_description"
                rows="3"
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500"
                placeholder="Your description here"
                required
              ></textarea>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="long_description"
                className="block mb-2 text-xl font-medium text-gray-200"
              >
               Long Description
              </label>
              <textarea
                id="long_description"
                name="long_description"
                rows="10"
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500"
                placeholder="Your description here"
                required
              ></textarea>
            </div>
          </div>
          <button
            type="submit"
            className="btn btn-outline my-10 bg-black"
          >
            Add product
          </button>
        </form>
      </div>
    </section>
    </main>

  );
};

export default AddBlog;