import React from 'react';
import Navbar from '../Components/Shares/Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../Components/Shares/Footer/Footer';

const Main = () => {
    return (
        <div>
        <Navbar />
        <Outlet />
        <Footer />
     </div>
    );
};

export default Main;