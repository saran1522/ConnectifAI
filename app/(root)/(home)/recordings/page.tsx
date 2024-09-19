import CallList from "@/components/CallList";
import React from "react";

function Recordings() {
  return (
    <section className="flex flex-col size-full gap-10">
      <h1 className="text-[#ffffff37] font-semibold text-4xl">Recordings</h1>
      <CallList type="recordings" />
    </section>
  );
}

export default Recordings;
