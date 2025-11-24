import React, { useState } from "react";
import { Navigation, PrimaryButton } from "../components";
import { newsPage } from "../assets";
import {
  newsForm,
  news_description,
  newsIcons,
  news,
  tags,
} from "../constants/index_two";
import Comments from "../components/News/Comments";
import CommentForm from "../components/News/CommentForm";
import SocialNetwork from "../components/News/SocialIcons";
import RecentPosts from "../components/News/RecentPosts";
import Tags from "../components/News/Tags";
import Title from "../components/Title";
import Header from '../components/Header'
import Footer from "./Footer";

const NewsPage = () => {
  const [email, setEmail] = useState("");


  return (
  <div className="w-full mx-auto px-4">
      <Header title={"Our services are now all over the country."}/>
      <div className="mx-auto wrapper sm:flex sm:flex-row flex-col sm:gap-10">
        <div className="sm:w-[65%] flex flex-col flex-1  my-16 space-x-6">
          {/* image */}
          <img
            src={newsPage}
            alt="truck image"
            className=" pb-12 w-[90%] h-[20%]"
          />

          {/* Description */}
          {news_description.map((items, index) => (
            <p
              className=" font-normal text-base leading-5 tracking-wide py-4"
              key={index}
            >
              {items.des}
            </p>
          ))}
          {/* Description End */}

          {/* Comments */}
          <Comments />
          {/* Comments End */}

          {/* Form Section */}

          <div className="w-full pt-12 font-sans font-bold ">
            <h4 className="text-slate-blue text-3xl font-open font-bold pb-7">
              Leave A Comment
            </h4>

            <div className=" pb-6">
              {newsForm.map((items, index) => (
                <div key={index}>
                  <CommentForm
                    type={items.type}
                    label={items.label}
                    className={items.className}
                    
                  />
                </div>
              ))}
            </div>
            <PrimaryButton
              className={" bg-primary-green w-24"}
              buttonName={"Send"}
            />
          </div>

          {/* From Section End*/}
        </div>

        <div className="w-full  sm:mt-14 flex flex-col flex-1 items-center space-y-20">
          {/* Share with friend section */}
          <div className=" w-full space-y-4">
            <Title title={"Social Networks"} border />
            <SocialNetwork newsIcons={newsIcons} />
          </div>
          {/* Share with friend section End*/}

          {/* Recent Posts */}

          <div className="w-full">
            <RecentPosts news={news} />
          </div>

          <div className="w-full">
            <Title title={"Tags"} border />
            <Tags items={tags} />
          </div>

          {/* Recent Posts End */}
        </div>
      </div>
    </div>
  );
};

export default NewsPage;
