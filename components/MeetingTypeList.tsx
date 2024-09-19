"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import MeetingModal from "./MeetingModal";
import { useUser } from "@clerk/nextjs";
import { Call, useStreamVideoClient } from "@stream-io/video-react-sdk";
import { useToast } from "@/hooks/use-toast";
import { Textarea } from "./ui/textarea";
import ReactDatePicker from "react-datepicker";
import MeetingTypeCard from "./MeetingTypeCard";

function MeetingTypeList() {
  const [meetingType, setMeetingType] = useState<
    "isInstantMeeting" | "isJoiningMeeting" | "isScheduleMeeting" | undefined
  >();
  const { toast } = useToast();
  const { user } = useUser();
  const client = useStreamVideoClient();
  const router = useRouter();
  const [values, setValues] = useState({
    dateTime: new Date(),
    description: "",
    link: "",
  });
  const [callDetails, setCallDetails] = useState<Call>();

  async function createMeeting() {
    if (!user || !client) return;

    try {
      if (!values.dateTime)
        toast({
          title: "Please select a date and time",
        });
      const id = crypto.randomUUID();
      const call = client.call("default", id);
      if (!call) throw new Error("Failed to create meeting");
      const startsAt =
        values.dateTime.toISOString() || new Date(Date.now()).toISOString();
      const description = values.description || "Instant Meeting";

      await call.getOrCreate({
        data: {
          starts_at: startsAt,
          custom: {
            description,
          },
        },
      });

      setCallDetails(call);

      if (!values.description) {
        router.push(`/meeting/${call.id}`);
      }
      toast({
        title: "Meeting Created",
      });
    } catch (error) {
      console.log(error);
      toast({
        title: "Failed to create meeting",
        variant: "destructive",
      });
    }
  }

  const meetingLink = `${process.env.NEXT_PUBLIC_BASE_URL}/meeting/${callDetails?.id}`;
  return (
    <section className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-4">
      <MeetingTypeCard
        title="Start Meeting"
        description="Start an instant meeting"
        image="/icons/add-meeting.svg"
        onClick={() => setMeetingType("isInstantMeeting")}
        className="bg-orange-1"
      />
      <MeetingTypeCard
        title="Join Meeting"
        description="Join via meeting link"
        image="/icons/join-meeting.svg"
        onClick={() => setMeetingType("isJoiningMeeting")}
        className="bg-[#1dd3b0]"
      />
      <MeetingTypeCard
        title="Schedule Meeting"
        description="Schedule a meeting for later"
        image="/icons/schedule.svg"
        onClick={() => setMeetingType("isScheduleMeeting")}
        className="bg-blue-1"
      />
      <MeetingTypeCard
        title="View Recordings"
        description="View past meeting recordings"
        image="/icons/recordings.svg"
        onClick={() => router.push("/recordings")}
        className="bg-[#ff312e]"
      />
      {!callDetails ? (
        <MeetingModal
          isOpen={meetingType === "isScheduleMeeting"}
          onClose={() => setMeetingType(undefined)}
          title="Create Meeting"
          handleClick={createMeeting}
        >
          <div className="flex flex-col gap-2.5">
            <label className="text-normal leading-[22px]">
              Meeting Description
            </label>
            <Textarea
              className="bg-dark-3 border-none focus-visible:ring-0 focus-visible:ring-offset-0 text-base resize-none"
              onChange={(e) =>
                setValues({ ...values, description: e.target.value })
              }
            />
          </div>
          <div className="flex flex-col gap-2.5 mt-2.5">
            <label>Select Date & Time</label>
            <ReactDatePicker
              selected={values.dateTime}
              onChange={(date) => setValues({ ...values, dateTime: date! })}
              showTimeSelect
              timeFormat="HH:mm"
              timeIntervals={15}
              timeCaption="time"
              dateFormat="MMMM d, yyyy h:mm aa"
              className="bg-dark-3 cursor-pointer rounded-lg w-full p-2 border-none focus:outline-none"
            />
          </div>
        </MeetingModal>
      ) : (
        <MeetingModal
          isOpen={meetingType === "isScheduleMeeting"}
          onClose={() => setMeetingType(undefined)}
          title="Meeting Scheduled"
          buttonText="Copy Meeting Link"
          className="text-center"
          image="/icons/checked.svg"
          buttonIcon="/icons/copy.svg"
          handleClick={() => {
            navigator.clipboard.writeText(meetingLink);
            toast({ title: "Meeting link copied" });
          }}
        />
      )}
      <MeetingModal
        isOpen={meetingType === "isInstantMeeting"}
        onClose={() => setMeetingType(undefined)}
        title="Start an Instant Meeting"
        buttonText="Start Meeting"
        className="text-center"
        handleClick={createMeeting}
      />
      <MeetingModal
        isOpen={meetingType === "isJoiningMeeting"}
        onClose={() => setMeetingType(undefined)}
        title="Join a meeting with link"
        buttonText="Join Meeting"
        className="text-center"
        handleClick={() => router.push(values.link)}
      >
        <input
          type="text"
          placeholder="type or paste the meeting link..."
          className="bg-dark-3 rounded-lg w-full p-2 focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0"
          onChange={(e) => setValues({ ...values, link: e.target.value })}
        />
      </MeetingModal>
    </section>
  );
}

export default MeetingTypeList;
