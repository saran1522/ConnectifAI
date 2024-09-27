import Image from "next/image";
import React from "react";
import UseCaseCard from "./UseCaseCard";

function UseCase() {
  return (
    <div className="flex mt-20 flex-col items-center gap-10">
      <div>
        <h3 className="text-center text-3xl mb-2 font-semibold">
          Anytime{" "}
          <span className="border-b-4 text-aqua-1 border-aqua-1">Anywhere</span>
        </h3>
        <p className="text-center max-md:px-4">
          Connect with your friends, family, and colleagues anytime, anywhere
          with ConnectifAI
        </p>
      </div>

      <UseCaseCard
        src="/images/call1.jpg"
        title="Official Meetings"
        description="Conduct official meetings with your team and clients with ease"
      />
      <UseCaseCard
        src="/images/call2.jpg"
        title="Fun With Friends"
        description="Enjoying with your friends is super easy with ConnectifAI"
        className="flex-row-reverse"
      />
      <UseCaseCard
        src="/images/call5.jpg"
        title="Family Time"
        description="Spend quality time with your family and friends with ConnectifAI"
      />
    </div>
  );
}

export default UseCase;
