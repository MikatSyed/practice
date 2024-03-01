
import Heading from '../Hero/Heading';
import FaqPage from './FaqPage';
import {faqData} from "./data"


const FaqSection = async() => {

   
   
    return (
        
       <>
        <Heading title='Frequently Asked Questions' subtitle='know about about website' />
       <FaqPage faqData={faqData}/>
       </>
    );
};

export default FaqSection;