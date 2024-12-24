import { SignIn } from "@clerk/nextjs";
import React from "react";

function SignInPage() {
  return (
    <main className="flex-center h-screen w-full">
      <div className="max-md:scale-75">
        <SignIn />
      </div>
    </main>
  );
}

export default SignInPage;
