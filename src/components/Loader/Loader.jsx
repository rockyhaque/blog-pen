import { ScaleLoader } from "react-spinners";


const Loader = () => {
    return (
        <div className="flex flex-col justify-center items-center min-h-[calc(100vh-132px)]">
            <ScaleLoader color="#A020F0" size={100}/>
        </div>
    );
};

export default Loader;