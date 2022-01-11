import React from 'react';
import Services from '../Services/Services';
import Footer from './Footer/Footer';
import Contact from '../../Contact/Contact';
import HeroSection from './HeroSection/HeroSection';
import ShowReviews from './ShowReviews/ShowReviews';
import Sliding from './Sliding/Sliding';
import CookingArt from './CookingArt/CookingArt';
import ChatChef from './ChatChef/ChatChef';

const Home = () => {
    return (
        <div>
            <HeroSection></HeroSection>
            <Sliding></Sliding>
            <Services></Services>
            <CookingArt></CookingArt>
            <ChatChef></ChatChef>
            <ShowReviews></ShowReviews>
            <Contact></Contact>
            <Footer></Footer>
            


        </div>
    );
};

export default Home;