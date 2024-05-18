import { useLoaderData } from "react-router-dom";

const Author = () => {
    const blogDetails = useLoaderData();
    return (
        <div>
            <h2>{blogDetails.user.name}</h2>
        </div>
    );
};

export default Author;