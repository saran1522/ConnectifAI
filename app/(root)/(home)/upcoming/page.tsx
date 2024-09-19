import CallList from "@/components/CallList";
import React from "react";

function Upcoming() {
  return (
    <section className="flex flex-col size-full gap-10">
      <h1 className="text-[#ffffff37] font-semibold text-4xl">
        Upcoming Meetings
      </h1>
      <CallList type="upcoming" />
    </section>
  );
}

export default Upcoming;
