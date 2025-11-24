import React from "react";

const Title = ({ title, border, para, contact, links, textColor, fontSize, paraTextColor, customBorder, }) => {
  return (
    <div className=" ">
      <div>
        <p
          className={`${
            textColor ? `${textColor}` : "text-slate-blue "
          } font-open pb-1 ${fontSize ? `${fontSize}`: 'text-lg'}`}
        >
          {title}
        </p>

        {border ? (
          <div className={`border-b-2 border-primary-green w-10  h-[2px] my-2`} />
        ) : (
          <></>
        )}
         {customBorder ? (
          <div className={`border-b-2 border-primary-green ${customBorder}  h-[2px] my-2`} />
        ) : (
          <></>
        )}
      </div>
      {para ? (
        <p className={`${paraTextColor? `${paraTextColor}`: 'text-white-green'} text-sm  font-light leading-5  tracking-wide `}>
          {" "}
          {para}{" "}
        </p>
      ) : contact ? (
        <div className="space-y-3">
          {contact.map((items, index) => (
            <div className="flex  items-start justify-start" key={index}>
              <items.Icon className="text-primary-green" />
              <p className={`pl-3 ${paraTextColor? `${paraTextColor}`: 'text-white-green'}  text-sm hover:text-primary-green"`}>{items.info}</p>
            </div>
          ))}
        </div>
      ) : links ? (
        <div className="flex flex-col space-y-3">
          {links.map((items, index) =>(
            <a href={items.href} className="text-white-green text-sm hover:text-primary-green" key={index}>
              {items.link}
            </a>
          ))}
          
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Title;
