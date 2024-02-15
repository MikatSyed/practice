import FeaturedCategory from '@/components/FeaturedCategory/FeaturedCategory';
import Hero from '@/components/Hero/Hero';
import Services from '@/components/Services/Services';
import React from 'react';
import About from '@/components/About/About';

const Home = () => {
    return (
        <>
        <Hero/>
        <FeaturedCategory/>
        <About/>
        <Services/>
      

    
        </>
    );
};

export default Home;