
import Footer from '../components/Footer/Footer';
import Navbar from '../components/Navbar/Navbar';

import { Outlet } from 'react-router-dom';

const MainLayout = () => {
    return (
        <div>
            <div className='h-16'>
                <Navbar></Navbar>
            </div>
            <div className='min-h-[calc(100vh-132px)]'>
                <Outlet></Outlet>
            </div>
            <div>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default MainLayout;