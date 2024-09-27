import React from "react";
import FeaturedCard from "./FeaturedCard";
import { FaHeadphonesSimple, FaVideo } from "react-icons/fa6";
import { MdScreenShare } from "react-icons/md";
import { IoSparklesOutline } from "react-icons/io5";
import {
  TbPlayerTrackPrevFilled,
  TbPlayerTrackNextFilled,
} from "react-icons/tb";

function Featured() {
  return (
    <div className=" pt-10 pb-10 w-full">
      <h3 className="text-center text-3xl mb-2 font-semibold">
        Checkout{" "}
        <span className="border-b-4 text-aqua-1 border-aqua-1">Features</span>
      </h3>
      <p className="text-center max-md:px-4">
        Checkout our amazing features that will make your experience better than
        ever
      </p>
      <div className="flex justify-evenly gap-20 flex-wrap w-full max-md:flex-col max-md:gap-10 mt-10">
        <FeaturedCard
          icon={FaHeadphonesSimple}
          title="Audio and HD Video Calling"
          description="Connect with your friends and family with high quality audio and video calls"
        />
        <FeaturedCard
          icon={MdScreenShare}
          title="Screen Sharing"
          description="Share your screen with other participants to show them what you are working on"
        />
        <FeaturedCard
          icon={IoSparklesOutline}
          title="Chat with AI"
          description="Chat with our AI powered chatbot to get instant answers to your questions"
        />
        <FeaturedCard
          icon={TbPlayerTrackPrevFilled}
          title="Access Previous Calls"
          description="Keep track of previous calls with ease and share them with anyone"
        />
        <FeaturedCard
          icon={TbPlayerTrackNextFilled}
          title="Access Upcoming Calls"
          description="Keep track of upcoming calls with ease and share them with anyone"
        />
        <FeaturedCard
          icon={FaVideo}
          title="Access Recordings"
          description="Access your recordings with ease and share them with your friends"
        />
      </div>
    </div>
  );
}

export default Featured;
