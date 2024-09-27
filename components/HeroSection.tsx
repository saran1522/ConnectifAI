"use client";
import { useUser } from "@clerk/nextjs";
import React, { useEffect, useState } from "react";

function HeroSection() {
  const date = new Date();
  const [time, setTime] = useState(
    date.toLocaleString("en-IN", {
      hour: "2-digit",
      minute: "2-digit",
    })
  );
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(
        new Date().toLocaleString("en-IN", {
          hour: "2-digit",
          minute: "2-digit",
        })
      );
    }, 1000);
    return () => clearInterval(interval);
  }, [time]);
  const day = Intl.DateTimeFormat("en-IN", { dateStyle: "full" }).format(date);
  const { user } = useUser();

  return (
    <div className="text-[#ffffffd2] max-md:mb-10 flex flex-col h-[180px] rounded-lg bg-cover w-full">
      <div className="">
        <h1 className="text-3xl py-3 lg:text-5xl font-semibold capitalize">
          Welcome, {user?.fullName}
        </h1>
      </div>
      <div className="flex flex-col max-md:py-2 lg:py-3">
        <div className="flex flex-col gap-5">
          <h1 className="text-xl font-semibold lg:text-3xl">
            {time} {day}
          </h1>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
