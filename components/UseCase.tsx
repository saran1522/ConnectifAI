import Image from "next/image";
import React from "react";
import UseCaseCard from "./UseCaseCard";
import Heading from "./Heading";

function UseCase() {
  return (
    <div className="flex mt-40 flex-col items-center gap-10">
      <div>
        <Heading
          text1="Anytime, "
          text2="Anywhere"
          description="Connect with your friends, family, and colleagues anytime, anywhere
          with ConnectifAI"
        />
      </div>

      <UseCaseCard
        src="/images/office1.png"
        title="Official Meetings"
        description="Conduct official meetings with your team and clients with ease"
      />
      <UseCaseCard
        src="/images/friends1.png"
        title="Fun With Friends"
        description="Enjoying with your friends is super easy with ConnectifAI"
        className="flex-row-reverse"
      />
      <UseCaseCard
        src="/images/family4.png"
        title="Family Time"
        description="Spend quality time with your family and friends with ConnectifAI"
      />
    </div>
  );
}

export default UseCase;
