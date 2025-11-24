import { Switch } from "@material-tailwind/react";
import React from "react";

const NotificationsCard = ({ type, description }) => {
  return (
    <div>
      <div>
        <div className="flex items-center justify-between p-3 border-gray-300 border shadow-md rounded-lg">
          <div className=" leading-7">
            <p className=" font-open text-blue-gray-900 font-bold">{type}</p>
            <p className=" text-gray-500">{description}</p>
          </div>
          <div className="  text-gray-400 h-3">
            <Switch
              defaultChecked
              // style={{height:'18px'}}
              className="bg-primary-green h-4"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotificationsCard;
