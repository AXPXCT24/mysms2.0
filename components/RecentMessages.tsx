import Link from "next/link";
import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const RecentMessages = ({
  accounts,
  transactions = [],
  appwriteItemId,
  page = 1,
}: RecentTransactionsProps) => {
  return (
    <section className="recent-transactions">
      <header className="flex items-center justify-between">
        <h2 className="recent-transactions-label">Recent Messages</h2>
        <Link href={`/transaction-history/?id=`} className="view-all-btn">
          View all
        </Link>
      </header>

      <Tabs defaultValue="Test" className="w-full">
        <TabsList className="recent-transactions-tablist">
          <TabsTrigger value="Test">
            test
          </TabsTrigger>
        </TabsList>
      </Tabs>
    </section>
  );
};

export default RecentMessages;
