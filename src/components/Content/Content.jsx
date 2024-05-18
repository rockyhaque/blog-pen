import { useLoaderData } from "react-router-dom";
import Markdown from "react-markdown";
import rehypeRaw from "rehype-raw";

const Content = () => {
  const blogDetails = useLoaderData();
  const { cover_image, title, description, published_at, tags, body_html } = blogDetails;
  console.log(blogDetails);
  return (
    <div
      rel="noopener noreferrer"
      className="mx-auto group border border-opacity-30 hover:no-underline focus:no-underline text-black p-4 rounded-lg"
    >
      <img
        role="presentation"
        className="object-cover w-full rounded h-44 bg-gray-500"
        src={cover_image || "https://i.ibb.co/nmWx8cM/404.jpg"}
      />
      <div className="flex flex-wrap py-6 gap-2 border-t border-dashed ">
        {tags.map((tag) => (
          <a
            key={tag}
            rel="noopener noreferrer"
            href="#"
            className="px-3 py-1 rounded-sm hover:underline bg-violet-700 dark:text-gray-200"
          >
            #{tag}
          </a>
        ))}
      </div>
      <div className="p-6 space-y-2">
        <h3 className="text-2xl text-black font-semibold group-hover:underline group-focus:underline">
          {title}
        </h3>
        
        <Markdown rehypePlugins={[rehypeRaw]}>{body_html}</Markdown>
        
        
      </div>
      
    </div>
  );
};

export default Content;