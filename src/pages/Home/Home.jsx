import Hero from "../../components/Hero/Hero";
import Wave from '../../assets/wave.svg';
import { Helmet } from "react-helmet-async";


const Home = () => {
    return (
        <div className='flex relative flex-col justify-center items-center min-h-[calc(100vh-132px)]'>
            <Helmet>
                <title>Blog Pen | Home</title>
            </Helmet>
            <Hero></Hero>
            <img className="absolute bottom-0 w-full" src={Wave} alt="img" />
        </div>
    );
};

export default Home;