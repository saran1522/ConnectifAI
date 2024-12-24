import React from "react";
import { IconType } from "react-icons/lib";

function TrustCard({
  icon: Icon,
  value,
  description,
}: {
  icon: IconType;
  value: string;
  description: string;
}) {
  return (
    <div className="flex flex-col gap-1 items-center">
      <Icon size={60} className="text-indigo-600" />
      <h3 className="text-4xl text-indigo-500">{value}</h3>
      <p className="text-xl text-center">{description}</p>
    </div>
  );
}

export default TrustCard;
