import FeaturedCategory from '@/components/FeaturedCategory/FeaturedCategory';
import Hero from '@/components/Hero/Hero';
import Services from '@/components/Services/Services';
import React from 'react';
import About from '@/components/About/About';
import Blogs from '../(Main)/blog/page';
import FaqSection from '@/components/FaqSection/FaqSection';
import Awards from '@/components/Awards/Awards';


const Home = () => {
    return (
        <>
        <Hero/>
        <FeaturedCategory/>
        <About/>
        <Services/>
        <Awards/>
        <Blogs/>
        <FaqSection/>
      

    
        </>
    );
};

export default Home;