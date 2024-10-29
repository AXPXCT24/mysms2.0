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

const RecentMessagesTable = ({ messages }: Messages) => {
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
          <TableRow key={t.message_id} className="!over:bg-none !border-b-DEFAULT h-[50px]">
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
        ))}
      </TableBody>
    </Table>
  );
};

export default RecentMessagesTable;
