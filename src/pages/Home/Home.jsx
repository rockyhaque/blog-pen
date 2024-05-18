import Hero from "../../components/Hero/Hero";
import Wave from '../../assets/wave.svg';


const Home = () => {
    return (
        <div className='flex relative flex-col justify-center items-center min-h-[calc(100vh-132px)]'>
            <Hero></Hero>
            <img className="absolute bottom-0 w-full" src={Wave} alt="img" />
        </div>
    );
};

export default Home;