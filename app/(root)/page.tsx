import HeaderBox from "@/components/HeaderBox";
import HomeChart from "@/components/HomeChart";
import RecentMessages from "@/components/RecentMessages";
import RightSidebar from "@/components/RightSidebar";
import React from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";

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
        <Separator className="bg-gray-300 h-px" />
        <ScrollArea>
          <div className="flex max-lg:flex-col gap-4 mb-6">
            <HomeChart
              accounts={[]}
              totalClients={5742}
              totalMessages={12405}
            />
            <HomeChart
              accounts={[]}
              totalClients={5742}
              totalMessages={12405}
            />
            <HomeChart
              accounts={[]}
              totalClients={5742}
              totalMessages={12405}
            />
          </div>
          <RecentMessages />
        </ScrollArea>
      </div>
      <RightSidebar user={loggedIn} />
    </section>
  );
};

export default Dashboard;
