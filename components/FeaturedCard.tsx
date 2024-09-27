import React from "react";
import { IconType } from "react-icons/lib";

function FeaturedCard({
  icon,
  title,
  description,
}: {
  icon: IconType;
  title: string;
  description: string;
}) {
  const Icon = icon;
  return (
    <div className="flex flex-col items-center gap-2">
      <Icon size={60} className="text-aqua-1" />
      <h3 className="text-xl">{title}</h3>
      <p className="text-center max-w-56">{description}</p>
    </div>
  );
}

export default FeaturedCard;
