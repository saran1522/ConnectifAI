import HeroSection from "@/components/HeroSection";
import MeetingTypeList from "@/components/MeetingTypeList";
import React from "react";

function Home() {
  return (
    <section className="flex flex-col">
      <HeroSection />
      <MeetingTypeList />
    </section>
  );
}

export default Home;
