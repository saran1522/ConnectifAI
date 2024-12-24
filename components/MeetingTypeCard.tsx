import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";

interface MeetingCardProps {
  title: string;
  description: string;
  image: string;
  onClick: () => void;
  className: string;
}

function MeetingTypeCard({
  title,
  description,
  image,
  onClick,
  className,
}: MeetingCardProps) {
  return (
    <div
      className={cn(
        " p-4 flex flex-col gap-6 lg:gap-14 justify-between w-full rounded-xl xl:max-w-[350px] cursor-pointer ",
        className
      )}
      onClick={onClick}
    >
      <div className="flex-center glassmorphism rounded-lg size-10">
        <Image src={image} height={22} width={22} alt="join meeting"></Image>
      </div>
      <div className="flex flex-col gap-2 w-full">
        <h1 className="text-2xl font-semibold w-full">{title}</h1>
        <p className="text-sm font-normal">{description}</p>
      </div>
    </div>
  );
}

export default MeetingTypeCard;
