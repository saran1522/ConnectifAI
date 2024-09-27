"use client";
import React from "react";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";

function StartBtn() {
  const router = useRouter();
  return (
    <Button
      onClick={() => router.push("/home")}
      className=" border border-purple-1 rounded-lg p-4 hover:bg-aqua-1 hover:bg-clip-border transition-all ease-linear hover:text-gray-800 hover:border-transparent"
    >
      Get Started →
    </Button>
  );
}

export default StartBtn;
