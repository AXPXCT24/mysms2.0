"use client";

import { useEffect, useRef, useState } from "react";
import { MessagesSchema } from "@/types/types";
import { Button } from "./ui/button";
import {
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";
import Image from "next/image";
import { Separator } from "./ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Textarea } from "./ui/textarea";
import { ScrollArea } from "@radix-ui/react-scroll-area";

interface SmsDialogProps {
  message: MessagesSchema[];
}

const SmsDialog = ({ message }: SmsDialogProps) => {
  const [isActive, setIsActive] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [message]);

  return (
    <>
      <DialogContent className="bg-white border-green-800 h-[750px] max-lg:w-[380px] max-lg:h-[600px] rounded-lg flex flex-col flex-grow">
        <DialogHeader className="gap-1">
          <DialogTitle>MySMS</DialogTitle>
          <DialogDescription>
            Click the Reply button if you want to send a message.
          </DialogDescription>
          <Separator className="bg-gray-300" />
        </DialogHeader>
        <ScrollArea
          ref={containerRef}
          className="h-full border border-gray-300 bg-slate-100 rounded-lg overflow-y-auto no-scrollbar"
        >
          {message.map((t: MessagesSchema) =>
            t.msg_type === "Outgoing" ? (
              <div
                className="flex flex-col gap-2 max-lg:gap-1"
                key={t.message_id}
              >
                <div className="flex flex-row p-4 max-lg:p-2 justify-end items-center">
                  <div className="flex flex-col justify-center items-end">
                    <span className="text-xs">Port: {t.port_id}</span>
                    <p className="text-sm p-2 border rounded-lg text-black border-[#000000] bg-green-500 border-black ml-16">
                      {t.content}
                    </p>
                    <span className="text-xs">{t.date_time}</span>
                  </div>
                  <Avatar className="mt-4 ml-2">
                    <AvatarImage src="" alt="@shadcn" />
                    <AvatarFallback className="border border-black-1">
                      MS
                    </AvatarFallback>
                  </Avatar>
                </div>
              </div>
            ) : (
              <div className="flex flex-row p-4 max-lg:p-2" key={t.message_id}>
                <Avatar className="mt-6 mr-2">
                  <AvatarImage
                    className="border border-gray-300"
                    src=""
                    alt="@shadcn"
                  />
                  <AvatarFallback className="border border-black-1">
                    MS
                  </AvatarFallback>
                </Avatar>
                <div>
                  <span className="text-xs">{t.client_id}</span>
                  <p className="text-sm p-2 border rounded-lg border-[#000000] mr-16">
                    {t.content}
                  </p>
                  <span className="text-xs">{t.date_time}</span>
                </div>
              </div>
            )
          )}
        </ScrollArea>
        <DialogFooter>
          <div className="flex w-full justify-center items-end gap-2">
            <Textarea
              placeholder="Message Content"
              className="focus:border-green-600 border-gray-400 focus:ring-gray-500 resize-y max-h-[150px]"
            />
            <Button
              onClick={() => setIsActive(true)}
              type="submit"
              className="border border-[#000000] w-[100px] bg-green-500 text-white max-lg:w-[60px]"
            >
              <Image
                src="/icons/send-sms.svg"
                alt="Send Message"
                width={20}
                height={20}
                className="object-contain"
              />
            </Button>
          </div>
        </DialogFooter>
      </DialogContent>
    </>
  );
};

export default SmsDialog;
