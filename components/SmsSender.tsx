"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { smsSenderSchema } from "@/lib/utils";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import z from "zod";
import { Textarea } from "./ui/textarea";
import { Loader2 } from "lucide-react";

const SmsSender = () => {
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<z.infer<typeof smsSenderSchema>>({
    resolver: zodResolver(smsSenderSchema),
    defaultValues: {
      content: "",
      template_name: "",
    },
  });

  const onSubmit = (value: z.infer<typeof smsSenderSchema>) => {
    setIsLoading(true);

    console.log(value);

    setIsLoading(false);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control={form.control}
          name="template_name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Port</FormLabel>
              <FormControl>
                <Select>
                  <SelectTrigger className="w-[220px] border-gray-300">
                    <SelectValue placeholder="Select Port" />
                  </SelectTrigger>
                  <SelectContent className="bg-white border-gray-300">
                    <SelectGroup>
                      <SelectLabel>GSM Ports</SelectLabel>
                      <SelectItem
                        value="apple"
                        className="hover:cursor-pointer"
                      >
                        Port 15
                      </SelectItem>
                      <SelectItem
                        value="banana"
                        className="hover:cursor-pointer"
                      >
                        Port 16
                      </SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="template_name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>SMS Template</FormLabel>
              <FormControl>
                <Select>
                  <SelectTrigger className="w-[220px] border-gray-300">
                    <SelectValue placeholder="Select template" />
                  </SelectTrigger>
                  <SelectContent className="bg-white border-gray-300">
                    <SelectGroup>
                      <SelectLabel>GSM Ports</SelectLabel>
                      <SelectItem
                        value="apple"
                        className="hover:cursor-pointer hover:border-gray-300"
                      >
                        Sample SMS Template 1
                      </SelectItem>
                      <SelectItem
                        value="banana"
                        className="hover:cursor-pointer"
                      >
                        Sample SMS Template 2
                      </SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="template_name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Client Number</FormLabel>
              <FormControl>
                <Input
                  placeholder="Client Number"
                  className="w-[220px] border-gray-300 focus:border-gray-300 active:border-gray-300"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="content"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Message content</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Message Content"
                  className="min-h-[150px] max-h-[250px] border-gray-300 focus:border-gray-300 active:border-gray-300"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex flex-col gap-4 mt-4">
          <Button type="submit" disabled={isLoading} className="form-btn">
            {isLoading && (
              <>
                <Loader2 size={20} className="animate-spin" /> &nbsp; Loading...
              </>
            )}
            Send
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default SmsSender;
