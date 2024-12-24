import React from "react";
import FeaturedCard from "./FeaturedCard";
import { FaHeadphonesSimple, FaVideo } from "react-icons/fa6";
import { MdScreenShare } from "react-icons/md";
import { IoSparklesOutline } from "react-icons/io5";
import {
  TbPlayerTrackPrevFilled,
  TbPlayerTrackNextFilled,
} from "react-icons/tb";
import Heading from "./Heading";

function Featured() {
  return (
    <div className="w-full mt-20">
      <Heading
        text1="Checkout Amazing "
        text2="Features"
        description="Checkout our amazing features that will make your experience better than
        ever"
      />
      <div className="grid grid-cols-3 gap-20 w-full max-md:grid-cols-1 max-md:gap-10 mt-20">
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
