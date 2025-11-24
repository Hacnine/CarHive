import React from "react";
import NotificationsCard from "../../components/ProfileComponents/NotificationsCard";
import { notificationInfo } from "../../constants/index_four";
import PrimaryButton from "../../components/PrimaryButton";

const Notifications = ({ visible }) => {
  return (
    <div>
      <div>
        <div className="grid sm:grid-cols-2 gap-3 text-sm mt-7">
          {visible === "Notifications"
            ? notificationInfo.map((items, index) => (
                <div key={index}>
                  <NotificationsCard {...items} />
                </div>
              ))
            : null}
        </div>

        {visible === "Notifications" ? (
          <PrimaryButton
            className={"bg-primary-green mt-5"}
            buttonName={"Update Profile"}
          />
        ) : null}
      </div>
    </div>
  );
};

export default Notifications;
