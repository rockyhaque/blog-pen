import { useEffect, useState } from "react";
import BlogCard from "../../components/BlogCard/BlogCard";
import { deleteBlog, getBlogs } from "../../utilites/utility";

const Bookmarks = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    const storedBlogs = getBlogs();
    setBlogs(storedBlogs);
  }, []);
  const handleDelete = (id) => {
    deleteBlog(id);
    const storedBlogs = getBlogs();
    setBlogs(storedBlogs);
  };
  return (
    <div className="grid px-12 py-8 justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {/* Dynamic Cards */}
      {blogs.map((blog) => (
        <BlogCard
          handleDelete={handleDelete}
          deleteable={true}
          key={blog.id}
          blog={blog}
        ></BlogCard>
      ))}
    </div>
  );
};

export default Bookmarks;
