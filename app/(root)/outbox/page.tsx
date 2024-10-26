import React from "react";
import HeaderBox from "@/components/HeaderBox";

const Outbox = () => {
  return (
    <section className="home">
      <header className="home-content">
        <HeaderBox
          type="greeting"
          title="Welcome"
          user={"Guest"}
          subtext="Access your MySMS account in this dashboard"
        />
      </header>
    </section>
  );
};

export default Outbox;
