"use client";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Messages, MessagesSchema } from "@/types/types";
import { Dialog, DialogTrigger } from "./ui/dialog";
import SmsDialog from "./SmsDialog";
import { useState } from "react";
import { getSms } from "@/services/SmsServices";

const RecentMessagesTable = ({ messages }: Messages) => {
  const [message, setMessage] = useState<MessagesSchema[]>([]);

  const fetchMessage = async (client_id: string) => {
    const payload = {
      filter: "client_id",
      params: client_id,
      sorting: "ASC",
    };

    try {
      const res = await getSms(payload);
      if (res.length !== 0) {
        setMessage(res);
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
      <Table>
        <TableHeader className="bg-[#f9fafb]">
          <TableRow>
            <TableHead className="px-2 ">Port</TableHead>
            <TableHead className="px-2 ">Client Number</TableHead>
            <TableHead className="px-2 ">Message Content</TableHead>
            <TableHead className="px-2 ">Date and Time</TableHead>
            <TableHead className="px-2  max-md:hidden">Message ID</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {messages.map((t: MessagesSchema) => (
            <Dialog key={t.message_id}>
              <DialogTrigger asChild onClick={() => fetchMessage(t.client_id)}>
                <TableRow className="!over:bg-none hover:cursor-pointer hover:bg-slate-200 !border-b-DEFAULT h-[50px]">
                  <TableCell className="max-w-[60px] pl-2 pr-10">
                    <span className="text-s text-gray-700">{t.port_id}</span>
                  </TableCell>
                  <TableCell className="max-w-[110px] pl-2 pr-10">
                    <span className="text-s text-gray-700">{t.client_id}</span>
                  </TableCell>
                  <TableCell className="max-w-[400px] pl-2 pr-10">
                    <span className="text-s text-gray-700">{t.content}</span>
                  </TableCell>
                  <TableCell className="max-w-[110px] pl-2 pr-10">
                    <span className="text-s text-gray-700">{t.date_time}</span>
                  </TableCell>
                  <TableCell className="max-w-[110px] pl-2 pr-10">
                    <span className="text-s text-gray-700">{t.message_id}</span>
                  </TableCell>
                </TableRow>
              </DialogTrigger>
              <SmsDialog message={message} />
            </Dialog>
          ))}
        </TableBody>
      </Table>
  );
};

export default RecentMessagesTable;
