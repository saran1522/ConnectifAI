import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";

function UseCaseCard({
  src,
  title,
  description,
  className,
}: {
  src: string;
  title: string;
  description: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        `p-4 flex lg:w-[80%] max-md:gap-5 max-md:flex-col gap-5 items-center`,
        className
      )}
    >
      <Image src={src} alt="hero" width={500} height={200} className="updown" />
      <div>
        <h3 className="text-3xl">
          <span className=" text-indigo-600">{title} </span>
        </h3>
        <p className="text-xl w-72 leading-normal">{description}</p>
      </div>
    </div>
  );
}

export default UseCaseCard;
