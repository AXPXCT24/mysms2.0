import React from "react";
import HeaderBox from "@/components/HeaderBox";
import { Separator } from "@radix-ui/react-separator";

const SmsTemplate = () => {
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

export default SmsTemplate;
