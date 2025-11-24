import { useState } from "react";
import { BsFacebook } from "react-icons/bs";
import { AiFillGoogleCircle } from "react-icons/ai";

import CommentForm from "../../components/News/CommentForm";
import { newsForm } from "../../constants/index_two";
import { PrimaryButton } from "../../components";
import Header from "../../components/Header";
import Footer from "../Footer";

import React, { useEffect } from "react";
import { useLocation } from 'react-router-dom';
import Signin from "./Signin";
import SignUp from "./SignUp";

import { AppContext,useGlobalContext } from "../../Context";


const LoginRegisterContainer = () => {

  const {signInBtn, setSignInBtn } = useGlobalContext(AppContext);

  const location = useLocation();

  // When the route changes to /signup or /signin, update the context flag
  useEffect(() => {
    if (location.pathname.includes('/signup')) setSignInBtn(false);
    else if (location.pathname.includes('/signin')) setSignInBtn(true);
    // if neither, don't change (keeps previous UI state)
  }, [location.pathname, setSignInBtn]);

  return (
    <div className="relative">

      
      <Header bg={"bg-login h-[700px]"} />

      {signInBtn? <Signin />:<SignUp/>}
      
      

    </div>
  );
};

export default LoginRegisterContainer;
