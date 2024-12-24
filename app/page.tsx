import CallToAction from "@/components/CallToAction";
import Contact from "@/components/Contact";
import Featured from "@/components/Featured";
import StartBtn from "@/components/StartBtn";
import TrustNumbers from "@/components/TrustNumbers";
import UseCase from "@/components/UseCase";
import Image from "next/image";
import React from "react";
function Home() {
  return (
    <section className="bg-[url('/images/pixel4.jpg')] bg-no-repeat bg-center bg-cover">
      <div className="text-gray-100 backdrop-blur-xl">
        <div className="flex flex-col max-md:gap-4">
          <div className="flex z-40 mt-32 max-md:mt-16 flex-col gap-10 max-md:gap-6 justify-center items-center ">
            <h1 className="max-md:text-4xl text-center max-md:mt-10 max-md:px-4 bg-gradient-to-r from-aqua-1 to-indigo-600 text-transparent bg-clip-text text-7xl font-bold">
              ConnectifAI : A Real Time Video Conferencing Platform
            </h1>
            <p className="text-lg max-md:p-2 max-md:text-center text-blue-500">
              Effortless Video Calls, Intelligent AI Chatbot.
            </p>
            <StartBtn />
          </div>
          <div className="w-full lg:translate-y-[-100px] flex md:justify-around lg:items-center max-md:flex-col max-md:gap-0 ">
            <Image
              src="/images/iphone.png"
              alt="hero"
              width={200}
              height={50}
              className="rotate-6 updown max-md:scale-75"
            />
            <Image
              src="/images/family3.png"
              alt="hero"
              width={280}
              height={100}
              className="updown max-md:scale-90 max-md:ml-20"
            />
          </div>
        </div>
        <Featured />
        <UseCase />
        <TrustNumbers />
        <CallToAction />
        <Contact />
      </div>
    </section>
  );
}

export default Home;
