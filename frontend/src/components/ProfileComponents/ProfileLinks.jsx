
import { useEffect } from "react";
import SummaryCard from "../../components/ProfileComponents/SummaryCard";

import { Link } from "react-router-dom";
import { profile, profileLinks, summary } from "../../constants/index_four";
import ProfileCard from "../../components/ProfileComponents/ProfileCard";
import { useState } from "react";
import { AppContext, useGlobalContext } from "../../Context";

const ProfileLinks = () => {
    const {activeLink, setActiveLink} =
      useGlobalContext(AppContext); 
  return (
    <div className="">
    {profile.map((items, index) => (
      <div key={index} className="">
        <ProfileCard {...items} />
      </div>
    ))}

    <div className="mt-8  gap-1">
      {profileLinks.map((item, index) => (

        <ul key={index}
        className={`flex items-center gap-2 justify-start border h-10 my-1 pl-2 rounded-md  ${activeLink === index ? 'bg-primary-green text-white-green' : ''}`}
        >
          <li >
          <Link className=" flex items-center justify-center gap-2 cursor-pointer" to={item.link} onClick={() => 
         {setActiveLink(index) }}>
          <item.Icon className={`${activeLink === index ? ' text-white-green' : 'text-primary-green'} w-5 h-5`} />
         <span className={`${activeLink === index ? ' text-white-green' : 'text-blue-gray-900'}font-semibold`} >{item.linkName}</span>
          </Link>
          </li>
        </ul>
        
            
         
      ))}
    </div>
  </div>
  )
}

export default ProfileLinks
