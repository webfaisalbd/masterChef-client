import React from 'react';
import Services from '../Services/Services';
import Banner from './Banner/Banner';
import Footer from './Footer/Footer';
import Form from './Form/Form';
import HeroSection from './HeroSection/HeroSection';
import ShowReviews from './ShowReviews/ShowReviews';
import Sliding from './Sliding/Sliding';

const Home = () => {
    return (
        <div>
            <HeroSection></HeroSection>
           
            <Services></Services>
            <Sliding></Sliding>
            <ShowReviews></ShowReviews>
            <Form></Form>
            <Footer></Footer>
            


        </div>
    );
};

export default Home;