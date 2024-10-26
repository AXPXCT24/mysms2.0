"user client";

import Link from "next/link";
import Image from "next/image";
import CustomInput from "./CustomInput";
import { Button } from "./ui/button";
import { Loader2 } from "lucide-react";
import { Form } from "./ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { authFormSchema } from "@/lib/utils";
import z from "zod";
import { useState } from "react";

const AuthForm = ({ type }: { type: string }) => {
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<z.infer<typeof authFormSchema>>({
    resolver: zodResolver(authFormSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const onSubmit = (value: z.infer<typeof authFormSchema>) => {
    console.log(value);
  };

  return (
    <section className="auth-form">
      <header className="flex flex-col gap-5 md:gap-8">
        <Link
          href="/sign-in"
          className="cursor-pointer flex items-center gap-1"
        >
          <Image
            src="/icons/logo.svg"
            width={34}
            height={34}
            alt="Horizon logo"
          />
          <h1 className="text-26 font-ibm-plex-serif font-bold text-black-1">
            {type === "sign-in" ? "MySMS" : "MySMS Admin"}
          </h1>
        </Link>
      </header>
      <>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            {type === "sign-in" ? (
              <>
                <CustomInput
                  control={form.control}
                  name="username"
                  label="Username"
                  placeholder="Enter your username"
                />
                <CustomInput
                  control={form.control}
                  name="password"
                  label="Password"
                  placeholder="Enter your password"
                />
              </>
            ) : (
              <>
                <CustomInput
                  control={form.control}
                  name="username"
                  label="Admin Username"
                  placeholder="Enter your admin username"
                />
                <CustomInput
                  control={form.control}
                  name="password"
                  label="Admin Password"
                  placeholder="Enter your admin password"
                />
              </>
            )}

            <div className="flex flex-col gap-4">
              <Button type="submit" disabled={isLoading} className="form-btn">
                {isLoading ? (
                  <>
                    <Loader2 size={20} className="animate-spin" /> &nbsp;
                    Loading...
                  </>
                ) : type === "sign-in" ? (
                  "Sign In"
                ) : (
                  "Admin Sign In"
                )}
              </Button>
            </div>
          </form>
        </Form>

        <footer className="flex justify-center gap-1">
          <p className="text-14 font-normal text-gray-600">
            {type === "sign-in" ? "Are you an Admin?" : "Not an Admin?"}
          </p>
          <Link
            href={type === "sign-in" ? "/admin-sign-in" : "/sign-in"}
            className="form-link"
          >
            {type === "sign-in" ? "Admin" : "User log-in"}
          </Link>
        </footer>
      </>
    </section>
  );
};

export default AuthForm;
