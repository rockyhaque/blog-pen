import { TiDeleteOutline } from "react-icons/ti";
import { Link } from "react-router-dom";

const BlogCard = ({ blog, deleteable, handleDelete }) => {
  const { id, cover_image, title, description, published_at } = blog;
  
  return (
    <div className="flex relative">
      <Link
        to={`/blog/${id}`}
        rel="noopener noreferrer"
        className="max-w-sm mx-auto group transition border-2 hover:scale-105 border-primary hover:border-info border-opacity-30 hover:no-underline focus:no-underline text-black p-4 rounded-lg"
      >
        <img
          role="presentation"
          className="object-cover w-full rounded h-44 bg-gray-500"
          src={cover_image || "https://i.ibb.co/nmWx8cM/404.jpg"}
        />
        <div className="p-6 space-y-2">
          <h3 className="text-2xl text-black font-semibold group-hover:underline group-focus:underline">
            {title}
          </h3>
          <span className="text-xs text-gray-400">
            {new Date(published_at).toLocaleDateString()}
          </span>
          <p>{description}</p>
        </div>
      </Link>
      {
        deleteable && (<div onClick={() => handleDelete(id)}  className="bg-primary p-3 ml-5 rounded-full hover:bg-secondary group  cursor-pointer hover:scale-105 absolute -top-5 -right-5"><TiDeleteOutline size={40} className="text-secondary group-hover:text-primary" /></div>)
      }
      
    </div>
  );
};

export default BlogCard;
