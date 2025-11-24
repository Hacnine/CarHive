import React from "react";
import Header from "../components/Header";
import { LabelInput, PrimaryButton } from "../components";
import CommentForm from "../components/News/CommentForm";
import {
  address,
  contactInfo,
  contactInfoTwo,
  message,
  newsForm,
} from "../constants/index_two";
import Footer from "./Footer";
import Address from "../components/Footer/Address";
import Title from "../components/Title";

const ContactPage = () => {
  return (
    <div>
      <Header title={"Contact"} />
      <div className="wrapper">
        <div className="grid grid-cols-3 gap-12 mt-24">
          <div className=" md:col-span-2 col-span-3 pb-6 ">
            <h2 className=" text-slate-blue text-3xl font-open font-bold  ">
              Do you have any question?
            </h2>

            <form action="https://formspree.io/f/xgegevnr" method="POST">
            <div className="flex items-center md:justify-between md:flex-row flex-col gap-3">
              {newsForm.map((items, index) => (
                <div key={index} className="md:w-fit w-full">
                  <CommentForm
                    type={items.type}
                    label={items.label}
                    className={items.className}
                  />
                </div>
              ))}
            </div>

              {message.map((items, index) => (
                <div key={index}>
                  <CommentForm
                    type={items.type}
                    label={items.label}
                    className={items.className}
                  />
                </div>
              ))}
              <PrimaryButton
                buttonName={"Send Message"}
                className={"bg-primary-green "}
                type={"submit"}
              />
            </form>
          </div>

          <div className=" md:col-span-1 col-span-3  h-full space-y-4 mb-20 ">
            <div className=" rounded-md  border border-gray-400/60 shadow px-6 py-8 ">
              <Title
                title={"US Office"}
                textColor={"text-slate-blue"}
                paraTextColor={"text-slate-blue"}
                contact={contactInfo}
                border
              />
            </div>

            <div className=" rounded-md  border border-gray-400/60 shadow px-6 py-8 ">
              <Title
                title={"AU Office"}
                textColor={"text-slate-blue"}
                paraTextColor={"text-slate-blue"}
                contact={contactInfoTwo}
                border
              />
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default ContactPage;
