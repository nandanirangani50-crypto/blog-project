import axios from "axios";
import { useEffect, useState } from "react";

function AllBlogs() {
  const [blogs, setBlog] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/blogs")
      .then((res) => setBlog(res.data));
  }, []);

  return (
    <section className="max-w-7xl mx-auto py-10 px-6">
      <h1 className="text-4xl font-bold mb-8">
        All Blogs
      </h1>

      <div className="grid grid-cols-3 gap-8">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="bg-white shadow-lg rounded-xl overflow-hidden"
          >
            <img
              src={blog.image}
              alt=""
              className="h-[220px] w-full object-cover"
            />

            <div className="p-4">
              <p className="text-purple-600">
                {blog.title}
              </p>

              <h3 className="font-bold text-xl my-2">
                {blog.heading}
              </h3>

              <p>{blog.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default AllBlogs;