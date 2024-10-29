import { useEffect } from "react";
import HeaderBox from "@/components/HeaderBox";
import { Separator } from "@/components/ui/separator";
import MessagesTable from "@/components/MessagesTable";
import { getSms } from "@/services/SmsServices";

const Outbox = () => {
  // useEffect(() => {
  //   const messages = async () => {
  //     const payload = {
  //       filter: "msg_type",
  //       params: "Outgoing",
  //     };

  //     try {
  //       const res = await getSms(payload);
  //       if (res) {
  //         console.log(res);
  //       }
  //     } catch (err) {
  //       console.error(err);
  //     }
  //   };

  //   messages();
  // }, []);

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
        <MessagesTable />
      </div>
    </section>
  );
};

export default Outbox;
