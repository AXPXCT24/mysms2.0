"use client";

import { useEffect, useState } from "react";
import HeaderBox from "@/components/HeaderBox";
import { Separator } from "@/components/ui/separator";
import { getSms } from "@/services/SmsServices";
import RecentMessagesTable from "@/components/RecentMessagesTable";
import { MessagesSchema } from "@/types/types";

const Outbox = () => {
  const [outboxMessages, setOutboxMessages] = useState<MessagesSchema[]>([])

  useEffect(() => {
    const messages = async () => {
      const payload = {
        filter: "msg_type",
        params: "Outgoing",
      };

      try {
        const res = await getSms(payload);
        if (res.length !== 0) {
          setOutboxMessages(res);
        }
      } catch (err) {
        console.error(err);
      }
    };

    messages();
  }, []);

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
        <RecentMessagesTable messages={outboxMessages}/>
      </div>
    </section>
  );
};

export default Outbox;
