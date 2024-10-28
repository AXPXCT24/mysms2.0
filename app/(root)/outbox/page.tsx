import React from "react";
import HeaderBox from "@/components/HeaderBox";
import { Separator } from "@/components/ui/separator";

const Outbox = () => {
  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox
            type="greeting"
            title="Welcome"
            user={"Guest"}
            subtext="Access your MySMS account in this dashboard"
          />
        </header>
        <Separator className="bg-gray-300 h-px" />
      </div>
    </section>
  );
};

export default Outbox;
