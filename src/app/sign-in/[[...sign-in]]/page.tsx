import { SignIn } from "@clerk/nextjs";
import React from "react";

export default function SignInPage() {
  return (
    <div className="flex items-center justify-center p-8">
      <SignIn />
    </div>
  );
}
