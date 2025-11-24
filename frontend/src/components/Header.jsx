import React from 'react'
import Navigation from './HomeComponents/Navbar'
import { Outlet } from 'react-router-dom'

const Header = ({title, height, bg, bgColor }) => {
  
  return (
    <>
  <div className={`${bg?  `${bg}`: 'bg-hero-img'} w-full mx-auto px-4 bg-cover bg-center bg-no-repeat `}>
      <div className="wrapper">
      <Navigation />
      </div>
        <div className='text-center  pb-20'>
        {/* bg-black/50 */}
        <h1 className={`${bg?  `${bgColor}`: ' bg-primary-green/10 '} head_text py-2 text-white-green w-full   font-serif `}>
          {title}
        </h1>
        </div>
      </div>
      {/* <Outlet/> */}
    </>
  )
}

export default Header
