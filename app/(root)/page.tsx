import HeaderBox from "@/components/HeaderBox";
import RightSidebar from "@/components/RightSidebar";
import React from "react";

const Dashboard = () => {
  const loggedIn = { firstName: "User" };

  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox
            type="greeting"
            title="Welcome"
            user={loggedIn?.firstName || "Guest"}
            subtext="Access your MySMS account in this dashboard"
          />
        </header>
      </div>

      <RightSidebar 
        user={loggedIn}
      />
    </section>
  );
};

export default Dashboard;
