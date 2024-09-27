import { SignUp } from "@clerk/nextjs";
import React from "react";

function SignUpPage() {
  return (
    <main className="flex-center h-screen w-full">
      <div className="scale-75">
        <SignUp />
      </div>
    </main>
  );
}

export default SignUpPage;
