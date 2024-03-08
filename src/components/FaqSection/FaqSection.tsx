import { getAllFaqs } from '@/lib/fetch';
import FaqPage from './FaqPage';
import Heading from '../Hero/Heading';



const FaqSection = async() => {
    const faq = await getAllFaqs() 
    const faqData = faq?.data;
   
    return (
        
       <>
        <Heading title='Frequently Asked Questions' subtitle='know about about website' />
       <FaqPage faqData={faqData}/>
       </>
    );
};

export default FaqSection;