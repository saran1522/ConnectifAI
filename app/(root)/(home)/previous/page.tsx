import CallList from "@/components/CallList";
import React from "react";

function Previous() {
  return (
    <section className="flex flex-col size-full gap-10">
      <h1 className="font-semibold text-4xl">Previous Meetings</h1>
      <CallList type="ended" />
    </section>
  );
}

export default Previous;
