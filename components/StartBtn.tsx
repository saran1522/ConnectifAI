"use client";
import React from "react";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";

function StartBtn() {
  const router = useRouter();
  return (
    <Button
      onClick={() => router.push("/home")}
      className=" border border-indigo-600 rounded-xl p-5 py-6 hover:bg-indigo-600 hover:bg-clip-border transition-all ease-linear hover:border-transparent text-lg hover:text-white"
    >
      Get Started →
    </Button>
  );
}

export default StartBtn;
