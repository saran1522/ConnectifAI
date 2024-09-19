import {
  DeviceSettings,
  VideoPreview,
  useCall,
} from "@stream-io/video-react-sdk";
import React, { useEffect, useState } from "react";
import { Button } from "./ui/button";

function MeetingSetup({
  setIsSetupComplete,
}: {
  setIsSetupComplete: (value: boolean) => void;
}) {
  const call = useCall();
  const [isMicCamToggledOn, setIsMicCamToggledOn] = useState(false);
  if (!call) throw new Error("useCall must be used within a StreamCall");

  useEffect(() => {
    if (isMicCamToggledOn) {
      call?.microphone.disable();
      call?.camera.disable();
    } else {
      call?.microphone.enable();
      call?.camera.enable();
    }
  }, [isMicCamToggledOn, call?.microphone, call?.camera]);
  return (
    <main className="flex h-screen w-full flex-col flex-center text-center gap-3">
      <h1 className="text-3xl font-bold">Meeting Setup</h1>
      <VideoPreview />
      <div className="flex-center h-16 gap-3">
        <label className="flex-center gap-2 font-medium lg:text-xl">
          <input
            type="checkbox"
            onChange={(e) => setIsMicCamToggledOn(e.target.checked)}
          />
          Join with Mic and Camera off
        </label>
        <DeviceSettings />
      </div>
      <Button
        className="bg-green-500 px-3 py-6 rounded-lg text-base lg:text-xl"
        onClick={() => {
          call.join();
          setIsSetupComplete(true);
        }}
      >
        Join Now
      </Button>
    </main>
  );
}

export default MeetingSetup;
