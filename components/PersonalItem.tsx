"use client";
import { cn } from "@/lib/utils";
import { useUser } from "@clerk/nextjs";
import Image from "next/image";
import React from "react";

interface PersonalItemProps {
  title?: string;
  description: string;
}
function PersonalItem({ title, description }: PersonalItemProps) {
  return (
    <div className="py-3 flex flex-col lg:flex-row lg:gap-3 lg:items-center max-sm:w-[340px] ">
      <div className="">{`${title}: `}</div>
      <div className="truncate">{description}</div>
    </div>
  );
}
export default PersonalItem;
