import React from "react";
import SmsSender from "./SmsSender";

const RightSidebar = ({ user, transactions, banks }: RightSidebarProps) => {
  return (
    <aside className="right-sidebar">
      <section className="flex flex-col pb-8">
        <div className="profile-banner" />
        <div className="profile">
          <div className="profile-img">
            <span className="text-5xl font-bold text-green-600">
              {user.firstName[0]}
            </span>
          </div>

          <div className="profile-details">
            <h1 className="profile-name">MySMS User 1</h1>
            <p className="profile-email">mbtc_user1@aamlo.com</p>
            <p className="profile-email">Metrobank - Account no: 1</p>
          </div>
        </div>
      </section>

      <section className="banks">
        <div className="flex w-full justify-between">
          <h2 className="header-2">Quick Actions</h2>
        </div>
        <div className="flex flex-col w-full justify-between border border-gray-300 rounded-lg p-4">
          <SmsSender />
        </div>
      </section>
    </aside>
  );
};

export default RightSidebar;
