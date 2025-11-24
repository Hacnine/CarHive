import {
  Accordion,
  AccordionBody,
  AccordionHeader,
} from "@material-tailwind/react";

import { useState } from "react";
import React from "react";
import { Faq, Faq_2 } from "../../constants/index_two";

function Icon({ id, open }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className={`${
        id === open ? "rotate-180" : ""
      }  transition-transform text-white-green bg-primary-green w-7 h-7 rounded p-2`}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
      />
    </svg>
  );
}

const FAQ = () => {
  const [open, setOpen] = React.useState(0);
  const handleOpen = (value) => setOpen(open === value ? 0 : value);
  var val = 1;
  var val_2 = 4;

  return (
    <>
      <div className="items-center justify-center flex flex-col  mb-9">
      <p className=" p-2 w-fit text-lg font-bold text-primary-green font-serif text-center bg-gray-200 rounded-md ">
            Do You Have
          </p>
          <h1 className="head_text font-open text-slate-blue head_text  items-center ">
            Any Questions
          </h1>
      </div>
      <div className="lg:flex lg:justify-between gap-4">
        <div className=" lg:w-1/2" >
          {Faq.map((items, index) => (
            <div key={index}>
              <Accordion
              className=""
              open={open === val + index}
              icon={<Icon id={val + index} open={open} />}
            >
              <AccordionHeader onClick={() => handleOpen(val + index)} className="font-medium text-md">
                {items.questions}
              </AccordionHeader>
              <AccordionBody className=" text-base  text-gray-800">{items.ans}</AccordionBody>
            </Accordion>
            </div>
          ))}
        </div>

        <div className="lg:w-1/2">
          {Faq_2.map((items, index) => (
            <div key={index}>
              <Accordion
              className=""
              open={open === val_2 + index}
              icon={<Icon id={val_2 + index} open={open} />}
            >
              <AccordionHeader onClick={() => handleOpen(val_2 + index)} className="font-medium text-md">
                {items.questions}
              </AccordionHeader>
              <AccordionBody className="w-[90%] leading-6 ">{items.ans}</AccordionBody>
            </Accordion>
            </div>
          ))}
        </div>
      </div>

    </>
  );
};


export default FAQ;
