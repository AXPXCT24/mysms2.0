"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import RecentMessagesTable from "./RecentMessagesTable";
import { MessagesSchema } from "@/types/types";
import { getSms } from "@/services/SmsServices";

const RecentMessages = () => {
  const [messageType, setMessageType] = useState("Incoming");
  const [messages, setMessages] = useState<MessagesSchema[]>([]);

  useEffect(() => {
    fetchMessages();
  }, [messageType]);

  const fetchMessages = async () => {
    const payload = {
      filter: "msg_type",
      params: messageType,
      limit: 5,
    };

    try {
      const res = await getSms(payload);
      if (res.length !== 0) {
        console.log(res);
        setMessages(res);
      } else {
        setMessages([]);
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <section className="recent-transactions">
      <header className="flex items-center justify-between">
        <h2 className="recent-transactions-label">Recent Messages</h2>
        <Link href={`/outbox`} className="view-all-btn">
          View all
        </Link>
      </header>

      <Tabs defaultValue="Inbox" className="w-full">
        <TabsList className="recent-transactions-tablist">
          <TabsTrigger value="Inbox" onClick={() => setMessageType("Incoming")}>
            Inbox
          </TabsTrigger>
          <TabsTrigger
            value="Outbox"
            onClick={() => setMessageType("Outgoing")}
          >
            Outbox
          </TabsTrigger>
        </TabsList>
        <TabsContent value="Inbox" className="space-y-4">
          <RecentMessagesTable messages={messages} />
        </TabsContent>
        <TabsContent value="Outbox" className="space-y-4">
          <RecentMessagesTable messages={messages} />
        </TabsContent>
      </Tabs>
    </section>
  );
};

export default RecentMessages;
