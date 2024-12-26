import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";
import { useToast } from "@/hooks/use-toast";

interface MeetingCardProps {
  isPrevious?: boolean;
  icon: string;
  title: string;
  dateTime: string;
  participants: string;
  buttonText?: string;
  link?: string;
  buttonText2?: string;
  buttonIcon?: string;
  code?: string;
  handleClick?: () => void;
}

function MeetingCard({
  isPrevious,
  icon,
  title,
  dateTime,
  buttonText,
  link,
  buttonText2,
  buttonIcon,
  code,
  handleClick,
}: MeetingCardProps) {
  const { toast } = useToast();
  return (
    <div className="flex flex-col gap-4 w-full bg-dark-3 rounded-lg p-3">
      <div>
        <Image height={20} width={20} src={icon} alt="call" />
      </div>
      <div className="flex flex-col gap-2">
        <h2 className="text-xl font-semibold">{title}</h2>
        <p className="text-sm">{dateTime}</p>
      </div>
      <div className="flex items-center w-full gap-1 justify-between">
        {!isPrevious && (
          <div className="flex gap-2 basis-1/2">
            <Button
              className="bg-[linear-gradient(to_bottom_right,#0088ff,#2d00f7)]"
              onClick={handleClick}
            >
              {buttonText}
            </Button>
            <Button
              className="bg-dark-2"
              onClick={() => {
                navigator.clipboard.writeText(link!);
                toast({ title: "Link Copied" });
              }}
            >
              <Image height={20} width={20} src={buttonIcon!} alt="icon" />
              &nbsp; {buttonText2}
            </Button>
            {code && (
              <Button
                className="bg-dark-2"
                onClick={() => {
                  navigator.clipboard.writeText(code);
                  toast({ title: "Code Copied" });
                }}
              >
                <Image height={20} width={20} src={buttonIcon!} alt="icon" />
                &nbsp; Copy Code
              </Button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default MeetingCard;
