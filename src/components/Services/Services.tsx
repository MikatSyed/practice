import Heading from "../Hero/Heading";
import ServiceCard from "./ServiceCard";
import { serviceData } from "./data";
const Services = async () => {
  let data: any = serviceData.filter(
    (data: any) => data?.availbility === "available"
  );

  return (
    <>
      <section className="recent padding-bottom">
        <div className="container">
          {/* <Heading title='Services Listed' subtitle='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.' /> */}

          <Heading
            title="Services Listed"
            subtitle="Welcome to our home renovation services! Here, we strive to transform your living spaces into your dream haven. Our team of experts is dedicated to providing top-notch craftsmanship and attention to detail, ensuring your satisfaction every step of the way."
          />
          <ServiceCard data={data} />
        </div>
      </section>
    </>
  );
};

export default Services;
