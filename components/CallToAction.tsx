import React from "react";
import StartBtn from "./StartBtn";
import Heading from "./Heading";

function CallToAction() {
  return (
    <div className="flex flex-col gap-4 items-center mt-44">
      <Heading
        text1="Ready to bring your "
        text2="family together"
        description="Get started with ConnectifAI for free. No credit card required"
      />
      <StartBtn />
    </div>
  );
}

export default CallToAction;
