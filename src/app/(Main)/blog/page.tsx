"use client"
import BlogCard from "@/components/Blog/BlogCard";
import Heading from "@/components/Hero/Heading";


const Blogs = () => {
  
  return (
    <>
      <section className='recent padding'>
        <div className='container'>
          <Heading title='Our Blogs Listed' subtitle='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.' />
          <BlogCard  />
        </div>
      </section>
    </>
  )
}

export default Blogs;
