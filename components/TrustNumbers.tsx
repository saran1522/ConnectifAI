import React from "react";
import TrustCard from "./TrustCard";
import { CiStar, CiMail, CiUser, CiCircleCheck } from "react-icons/ci";
import { AiOutlineSafety } from "react-icons/ai";
import Heading from "./Heading";

function TrustNumbers() {
  return (
    <div className="flex flex-col items-center mt-20">
      <Heading
        text1="Why Choose "
        text2="ConnectifAI"
        description="Checkout our trust numbers"
      />
      <div className="flex justify-evenly w-full mt-10 max-md:flex-col max-md:gap-8">
        <TrustCard icon={CiUser} value="20+" description="active users" />
        <TrustCard icon={CiStar} value="4.7" description="user ratings" />
        <TrustCard
          icon={CiCircleCheck}
          value="100%"
          description="secure calls"
        />
        <TrustCard icon={CiMail} value="24/7" description="support" />
      </div>
    </div>
  );
}

export default TrustNumbers;
