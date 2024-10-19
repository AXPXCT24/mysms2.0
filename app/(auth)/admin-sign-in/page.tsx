"use client";

import AuthForm from "@/components/AuthForm";

const AdminSignIn = () => {
  return (
    <section className="flex-center size-full max-sm:px-6">
      <AuthForm type="admin" />
    </section>
  );
};

export default AdminSignIn;