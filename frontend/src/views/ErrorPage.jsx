import React from "react";
import error from "../assets/errorPage.svg";
import Header from "../components/Header";
import { Navigation } from "../components";
import Footer from "./Footer";

const ErrorPage = () => {
  return (
    <div>
        <div className="h-screen  w-screen bg-blue-gray-900 wrapper">
      <Navigation />
      <div className=" mt-16   flex items-center justify-center">
        <img src={error} alt="error page " className="w-[500px] h-[330px]" />
      </div>
    </div>
    <Footer />

    </div>
    
  );
};

export default ErrorPage;
