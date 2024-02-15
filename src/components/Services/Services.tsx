

import Heading from "../Hero/Heading"
import ServiceCard from "./ServiceCard"
import { getAllService } from "@/lib/fetch";

const Services = async() => {
  
  const service = await getAllService()
  let serviceData: any = service?.data.filter(
    (data: any) => data?.availbility === "available"
  );

  return (
    <>
      <section className='recent padding-bottom'>
        <div className='container'>
          {/* <Heading title='Services Listed' subtitle='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.' /> */}
          <Heading title='Services Listed 2' subtitle='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.2' />
          <ServiceCard  data={serviceData} />
        </div>
      </section>
    </>
  )
}

export default Services;
