import { cn } from "@/lib/utils";
import {
  CallControls,
  CallParticipantsList,
  CallStatsButton,
  CallingState,
  PaginatedGridLayout,
  SpeakerLayout,
  useCallStateHooks,
} from "@stream-io/video-react-sdk";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import React, { useState } from "react";
import { LayoutList, Users } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import EndCallButton from "./EndCallButton";
import Loader from "./Loader";
import AiChat from "./AiChat";

type CallLayoutType = "grid" | "speaker-right" | "speaker-left";

function MeetingRoom() {
  const [layout, setLayout] = useState<CallLayoutType>("grid");
  const [showParticipants, setShowParticipants] = useState(false);
  const searchParams = useSearchParams();
  const isPersonalRoom = !!searchParams.get("personal");
  const { useCallCallingState } = useCallStateHooks();
  const router = useRouter();
  const callingState = useCallCallingState();

  if (callingState !== CallingState.JOINED) return <Loader />;

  const CallLayout = () => {
    switch (layout) {
      case "grid":
        return <PaginatedGridLayout />;
      case "speaker-right":
        return <SpeakerLayout participantsBarPosition="left" />;
      case "speaker-left":
        return <SpeakerLayout participantsBarPosition="right" />;
    }
  };

  return (
    <section className="relative h-screen w-full pt-4 overflow-hidden">
      <div className="relative flex-center size-full">
        <div className="flex max-w-[1000px] items-center lg:mb-10 size-full">
          <CallLayout />
        </div>
        <div
          className={cn(
            "h-[calc(100vh-86px)] w-[200px] hidden ml-2 fixed right-2 z-30 md:relative md:z-0",
            {
              "show-block": showParticipants,
            }
          )}
        >
          <CallParticipantsList onClose={() => setShowParticipants(false)} />
        </div>
      </div>
      <div className="fixed flex-center gap-4 flex-wrap max-w-full w-full bottom-1 lg:bottom-0">
        <CallControls onLeave={() => router.push("/")} />
        <DropdownMenu>
          <div className="flex items-center">
            <DropdownMenuTrigger className="cursor-pointer p-2 rounded-full hover:bg-[#4c535b]">
              <LayoutList size={20} />
            </DropdownMenuTrigger>
          </div>
          <DropdownMenuContent className="border border-dark-1 bg-dark-1">
            {["Grid", "Speaker-Right", "Speaker-Left"].map((item, index) => (
              <div>
                <DropdownMenuItem
                  key={index}
                  onClick={() =>
                    setLayout(item.toLocaleLowerCase() as CallLayoutType)
                  }
                  className="cursor-pointer"
                >
                  {item}
                </DropdownMenuItem>
                <DropdownMenuSeparator className="border-dark-1" />
              </div>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
        <CallStatsButton />
        <button
          onClick={() => setShowParticipants((prev) => !prev)}
          className="cursor-pointer bg-[#2b344194] p-2 rounded-full hover:bg-[#4c535b]"
        >
          <Users size={20} />
        </button>
        <AiChat />
        {!isPersonalRoom && <EndCallButton />}
      </div>
    </section>
  );
}

export default MeetingRoom;
