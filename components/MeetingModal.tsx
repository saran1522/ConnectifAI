import React, { ReactNode } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import Image from "next/image";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";

interface MeetingModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  buttonText?: string;
  children?: ReactNode;
  className?: string;
  handleClick?: () => void;
  image?: string;
  buttonIcon?: string;
}

function MeetingModal({
  isOpen,
  onClose,
  title,
  buttonText,
  children,
  className,
  handleClick,
  image,
  buttonIcon,
}: MeetingModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="flex flex-col gap-6 w-full border-none px-6 py-9 bg-dark-1 ">
        <div className="flex flex-col gap-6">
          {image && (
            <div className="w-full">
              <Image
                src={image}
                alt="image"
                width={100}
                height={100}
                className="m-auto"
              />
            </div>
          )}
          <h1 className={cn("text-3xl font-bold", className)}>{title}</h1>
          <div>{children}</div>
          <Button
            className="bg-purple-1 text-xl p-2 focus-visible:ring-0 focus-visible:ring-offset-0"
            onClick={handleClick}
          >
            {buttonIcon && (
              <Image
                src={buttonIcon}
                alt="button-icon"
                width={20}
                height={20}
              />
            )}
            &nbsp;
            {buttonText || "Schedule Meeting"}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default MeetingModal;
