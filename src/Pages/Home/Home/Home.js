import React from 'react';
import Services from '../Services/Services';
import Banner from './Banner/Banner';
import Footer from './Footer/Footer';
import Contact from '../../Contact/Contact';
import HeroSection from './HeroSection/HeroSection';
import ShowReviews from './ShowReviews/ShowReviews';
import Sliding from './Sliding/Sliding';

const Home = () => {
    return (
        <div>
            <HeroSection></HeroSection>
            <Sliding></Sliding>
            <Services></Services>
            <ShowReviews></ShowReviews>
            <Contact></Contact>
            <Footer></Footer>
            


        </div>
    );
};

export default Home;