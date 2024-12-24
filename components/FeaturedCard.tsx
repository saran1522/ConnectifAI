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
      <Icon size={60} className="text-indigo-600" />
      <h3 className="text-2xl text-indigo-600">{title}</h3>
      <p className="text-center max-w-56 text-xl">{description}</p>
    </div>
  );
}

export default FeaturedCard;
