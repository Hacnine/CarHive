import { useState } from "react";
import Header from "../../components/Header";
import ProfileCard from "../../components/ProfileComponents/ProfileCard";
import { profile, profileLinks } from "../../constants/index_four";
import Footer from "../Footer";
import Dashboard from "./Dashboard";
import RecentOrder from "./RecentOrder";
import Profile from "./Profile";
import Orders from "./Orders";
import { AppContext, useGlobalContext } from "../../Context";


const ProfileContainer = () => {
  const {activeLink, setActiveLink, title, setTitle} = useGlobalContext(AppContext);

  return (
    <div>
      <Header title={title} bg={ 'bg-profile'}/>
      <div>
        
      </div>
      
    </div>
  )
}

export default ProfileContainer
