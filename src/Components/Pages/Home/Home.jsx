import React from 'react';
import TypeWriter from '../HomePages/TypeWriter';
import HeadLine from '../HomePages/HeadLine';
import HomeBanner from '../HomePages/HomeBanner';
import MobilePrice from '../HomePages/MobilePrice';
import OfferPhones from '../HomePages/OfferPhones';
import Reviews from '../HomePages/Reviews';
import SourcingPage from '../HomePages/SourcingPage';
import ChooseOption from '../HomePages/ChooseOption';
import Categories from '../Categories/Categories';
import Products from '../Products/Products';

const Home = () => {
    return (
        <div>
            {/* < TypeWriter /> */}
            < HeadLine />
            < HomeBanner />
            < Categories />
            < Products />
            < SourcingPage />
            < ChooseOption />
            < Reviews />
            < MobilePrice />
            < OfferPhones />
        </div>
    );
};

export default Home;