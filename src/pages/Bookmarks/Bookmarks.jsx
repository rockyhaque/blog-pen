import { useEffect, useState } from "react";
import BlogCard from "../../components/BlogCard/BlogCard";
import { deleteBlog, getBlogs } from "../../utilites/utility";
import EmptyState from "../../components/EmptyState/EmptyState";
import { Helmet } from "react-helmet-async";

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

  if(blogs.length < 1) {
    return <EmptyState message="No Bookmarks available" address="/blogs" label="Go To Blogs"></EmptyState>
  }

  return (
    <div className="container max-w-7xl p-6 mx-auto mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-12 py-8 gap-12">
      <Helmet>
        <title>Blog Pen | Bookmarks</title>
      </Helmet>
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
