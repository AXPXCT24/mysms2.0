import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const MessagesTable = () => {
  return (
    <Table>
      <TableHeader className="bg-[#f9fafb]">
        <TableRow>
          <TableHead className="px-2 ">Port</TableHead>
          <TableHead className="px-2 ">Sender</TableHead>
          <TableHead className="px-2 ">Content</TableHead>
          <TableHead className="px-2 ">Date</TableHead>
          <TableHead className="px-2  max-md:hidden">Status</TableHead>
        </TableRow>
      </TableHeader>

      <TableBody>
        <TableRow className="!over:bg-none !border-b-DEFAULT h-[50px]">
          <TableCell className="max-w-[60px] pl-2 pr-10">
            <span className="text-s text-gray-700">16</span>
          </TableCell>
          <TableCell className="max-w-[110px] pl-2 pr-10">
            <span className="text-s text-gray-700">+639335081867</span>
          </TableCell>
          <TableCell className="max-w-[400px] pl-2 pr-10">
            <span className="text-s text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </span>
          </TableCell>
          <TableCell className="max-w-[110px] pl-2 pr-10">
            <span className="text-s text-gray-700">2023-01-15 12:30</span>
          </TableCell>
          <TableCell className="max-w-[110px] pl-2 pr-10">
            <span className="text-s text-gray-700 max-md:hidden">Received</span>
          </TableCell>
        </TableRow>
        <TableRow className="!over:bg-none !border-b-DEFAULT h-[50px]">
          <TableCell className="max-w-[60px] pl-2 pr-10">
            <span className="text-s text-gray-700">16</span>
          </TableCell>
          <TableCell className="max-w-[110px] pl-2 pr-10">
            <span className="text-s text-gray-700">+639335081867</span>
          </TableCell>
          <TableCell className="max-w-[400px] pl-2 pr-10">
            <span className="text-s text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </span>
          </TableCell>
          <TableCell className="max-w-[110px] pl-2 pr-10">
            <span className="text-s text-gray-700">2023-01-15 12:30</span>
          </TableCell>
          <TableCell className="max-w-[110px] pl-2 pr-10">
            <span className="text-s text-gray-700 max-md:hidden">Received</span>
          </TableCell>
        </TableRow>
        <TableRow className="!over:bg-none !border-b-DEFAULT h-[50px]">
          <TableCell className="max-w-[60px] pl-2 pr-10">
            <span className="text-s text-gray-700">16</span>
          </TableCell>
          <TableCell className="max-w-[110px] pl-2 pr-10">
            <span className="text-s text-gray-700">+639335081867</span>
          </TableCell>
          <TableCell className="max-w-[400px] pl-2 pr-10">
            <span className="text-s text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </span>
          </TableCell>
          <TableCell className="max-w-[110px] pl-2 pr-10">
            <span className="text-s text-gray-700">2023-01-15 12:30</span>
          </TableCell>
          <TableCell className="max-w-[110px] pl-2 pr-10">
            <span className="text-s text-gray-700 max-md:hidden">Received</span>
          </TableCell>
        </TableRow>
        <TableRow className="!over:bg-none !border-b-DEFAULT h-[50px]">
          <TableCell className="max-w-[60px] pl-2 pr-10">
            <span className="text-s text-gray-700">16</span>
          </TableCell>
          <TableCell className="max-w-[110px] pl-2 pr-10">
            <span className="text-s text-gray-700">+639335081867</span>
          </TableCell>
          <TableCell className="max-w-[400px] pl-2 pr-10">
            <span className="text-s text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </span>
          </TableCell>
          <TableCell className="max-w-[110px] pl-2 pr-10">
            <span className="text-s text-gray-700">2023-01-15 12:30</span>
          </TableCell>
          <TableCell className="max-w-[110px] pl-2 pr-10">
            <span className="text-s text-gray-700 max-md:hidden">Received</span>
          </TableCell>
        </TableRow>
        <TableRow className="!over:bg-none !border-b-DEFAULT h-[50px]">
          <TableCell className="max-w-[60px] pl-2 pr-10">
            <span className="text-s text-gray-700">16</span>
          </TableCell>
          <TableCell className="max-w-[110px] pl-2 pr-10">
            <span className="text-s text-gray-700">+639335081867</span>
          </TableCell>
          <TableCell className="max-w-[400px] pl-2 pr-10">
            <span className="text-s text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </span>
          </TableCell>
          <TableCell className="max-w-[110px] pl-2 pr-10">
            <span className="text-s text-gray-700">2023-01-15 12:30</span>
          </TableCell>
          <TableCell className="max-w-[110px] pl-2 pr-10">
            <span className="text-s text-gray-700 max-md:hidden">Received</span>
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
};

export default MessagesTable;
