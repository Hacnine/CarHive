import React from "react";
import Title from "../Title";

const RecentPosts = ({ news }) => {
  return (
    <>
      <div className="w-full ">
        <Title title={"Recent Posts"} border/>

        {news.map((items, index) => (
          <div
            className="flex items-center  space-y-3 border-b border-gray-300"
            key={index}
          >
            <div className="object-cover w-20 h-13 overflow-clip">
              <img src={items.img} alt="travel photo" className="  w-20 h-16" />
            </div>

            <div className="ml-4 pb-6">
              <h4 className=" font-open text-slate-blue text-sm hover:text-slate-blue/80 hover:cursor-pointer">
                {items.title}
              </h4>
              <span className="text-gray-400 inline-block mr-2">
                <items.Icon className="pt-[4px]" />
              </span>
              <span className="text-xs text-gray-600">
                {items.month} {items.day}
                {" , "}
                {items.year}{" "}
              </span>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default RecentPosts;
