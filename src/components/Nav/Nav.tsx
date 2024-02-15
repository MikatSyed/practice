"use client"
import React, { useState } from "react"
import { nav } from "../../components/Nav/Data"
import Link from "next/link"
import { CloseOutlined, UnorderedListOutlined,LoginOutlined } from "@ant-design/icons"
import Image from "next/image"
import logo from "../../assets/Home crafters f.png"


const Nav = () => {

  const [navList, setNavList] = useState(false)

  return (
    <>
      <header>
        <div className='container flex'>
          <div className='logo'>
            <Image src={logo} alt='' height={44}  width={170}/>
          </div>
          <div className='nav'>
          <ul className={navList ? "small" : "flex"}>
              <li>
                <Link href="/">{nav[0].text}</Link>
              </li>
              <li>
                <Link href="/about">{nav[1].text}</Link>
              </li>
              <li>
                <Link href="/services">{nav[2].text}</Link>
              </li>
              <li>
                <Link href="/blog">{nav[3].text}</Link>
              </li>
              <li>
                <Link href="/feedback">{nav[4].text}</Link>
              </li>
              <li>
                <Link href="/contact">{nav[5].text}</Link>
              </li>
           
                
           
              
            </ul>
               
        
          </div>
          <div className='button flex'>
            <h4>
              
            </h4>
           
          <Link href="/login">
          <button className='btn1'>
              Login
            </button>
          </Link>
        
           
          </div>

          <div className='toggle'>
            <button onClick={() => setNavList(!navList)}>{navList ? <CloseOutlined  /> : <UnorderedListOutlined />}</button>
          </div>
        </div>
      </header>

    </>
  )
}

export default Nav;
