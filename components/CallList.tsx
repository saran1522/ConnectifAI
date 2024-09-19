// @ts-nocheck
"use client";
import { useGetCall } from "@/hooks/useGetCalls";
import React, { useEffect, useState } from "react";
import { Call } from "@stream-io/video-react-sdk";
import { CallRecording } from "@stream-io/node-sdk";
import MeetingCard from "./MeetingCard";
import Loader from "./Loader";
import { useToast } from "@/hooks/use-toast";
import { useRouter } from "next/navigation";

function CallList({ type }: { type: "upcoming" | "ended" | "recordings" }) {
  const { endedCalls, upcomingCalls, callRecordings, isLoading } = useGetCall();
  const [recordings, setRecordings] = useState<CallRecording[]>();
  const router = useRouter();
  const { toast } = useToast();
  function getCallType() {
    switch (type) {
      case "upcoming":
        return upcomingCalls;
      case "ended":
        return endedCalls;
      case "recordings":
        return recordings;
      default:
        return [];
    }
  }

  function getNoCallMessage() {
    switch (type) {
      case "upcoming":
        return "No upcoming calls";
      case "ended":
        return "No previous calls";
      case "recordings":
        return "No recordings";
      default:
        return "Nothing to see here";
    }
  }

  useEffect(() => {
    const fetchRecordings = async () => {
      try {
        const callsData = await Promise.all(
          callRecordings?.map((recording) => recording.queryRecordings())
        );
        const recordings = callsData
          .filter((call) => call.recordings.length > 0)
          .flatMap((call) => call?.recordings);
        setRecordings(recordings);
      } catch (error) {
        toast({ title: "Can't fetch recordings" });
      }
    };
    if (type === "recordings") fetchRecordings();
  }, [type, callRecordings]);

  const calls = getCallType();
  const noCallMessage = getNoCallMessage();

  if (isLoading) return <Loader />;

  return (
    <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
      {calls && calls.length > 0 ? (
        calls.map((call: Call | CallRecording) => (
          <MeetingCard
            key={(call as Call).id}
            isPrevious={type === "ended"}
            icon={
              type === "upcoming"
                ? "/icons/upcoming.svg"
                : type === "ended"
                ? "/icons/previous.svg"
                : "/icons/recordings.svg"
            }
            title={
              (call as Call).state?.custom.description ||
              call.filename?.substring(0, 20) ||
              "Personal Meeting"
            }
            dateTime={
              (call as Call).state?.startsAt.toLocaleString() ||
              (call as Call).state?.start_time.toLocaleString()
            }
            buttonText={type === "upcoming" ? "Start" : "Play"}
            link={
              type === "recordings"
                ? (call as Call).url
                : `${process.env.NEXT_PUBLIC_BASE_URL}/meeting/${
                    (call as Call).id
                  }`
            }
            buttonText2={type === "upcoming" ? "Copy Link" : "Share"}
            buttonIcon={
              type === "upcoming" ? "/icons/copy.svg" : "/icons/share.svg"
            }
            code={type === "upcoming" && (call as Call).id}
            handleClick={
              type === "upcoming"
                ? () => router.push(`/meeting/${call.id}`)
                : () => router.push(call.url)
            }
          />
        ))
      ) : (
        <h1 className="text-center">{noCallMessage}</h1>
      )}
    </div>
  );
}

export default CallList;
