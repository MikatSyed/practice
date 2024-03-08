import Awards from '@/components/Awards/Awards';
import Client from '@/components/Client/Client';
import FaqSection from '@/components/FaqSection/FaqSection';
import FeaturedCategory from '@/components/FeaturedCategory/FeaturedCategory';
import Hero from '@/components/Hero/Hero';
import Review from '@/components/Review/Review';
import Services from '@/components/Services/Services';
import UpcomingService from '@/components/UpcomingService/UpcomingService';
import BlogCard from '../(Main)/blog/page';
import About from '@/components/About/About';


const Home = () => {
    return (
        <>
        <Hero/>
        <FeaturedCategory/>
        <About/>
        <Services/>
        <Awards/>
        <UpcomingService/>
      
     
        <BlogCard/>
        <FaqSection/>
        <Client/>
        {/* <Review/> */}

    
        </>
    );
};

export default Home;