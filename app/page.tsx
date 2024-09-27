import Contact from "@/components/Contact";
import Featured from "@/components/Featured";
import StartBtn from "@/components/StartBtn";
import UseCase from "@/components/UseCase";
import Image from "next/image";
import React from "react";
function Home() {
  return (
    <section className="bg-[url('/images/wavebg2.jpg')] bg-cover bg-center">
      <div className="text-slate-300 backdrop-blur-xl  ">
        <div className="flex justify-center items-center max-md:flex-col max-md:gap-4">
          <div className="flex lg:w-1/2 lg:pr-20 pr-5 mt-10 max-md:mt-16 flex-col gap-4 justify-center items-center lg:h-screen">
            <h1 className="max-md:text-4xl text-center max-md:mt-10 bg-gradient-to-r from-aqua-1 to-purple-1 text-transparent bg-clip-text text-5xl font-bold">
              ConnectifAI : A Real Time Video Conferencing Platform
            </h1>
            <p className="text-lg max-md:p-2 max-md:text-center">
              Effortless Video Calls, Intelligent AI Chatbot.
            </p>
            <StartBtn />
          </div>
          <div className="lg:w-1/2 flex justify-center items-center lg:h-screen">
            <div className="flex flex-col items-center max-md:p-6 max-md:my-10 gap-2 ">
              <Image
                src="/images/call2.jpg"
                alt="hero"
                width={450}
                height={200}
                className="rounded-xl border-8 border-gray-500 "
              />
            </div>
          </div>
        </div>
        <Featured />
        <UseCase />
        <Contact />
      </div>
    </section>
  );
}

export default Home;
