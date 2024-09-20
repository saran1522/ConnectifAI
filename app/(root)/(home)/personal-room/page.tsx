"use client";
import PersonalItem from "@/components/PersonalItem";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { useGetCallById } from "@/hooks/useGetCallById";
import { useUser } from "@clerk/nextjs";
import { useStreamVideoClient } from "@stream-io/video-react-sdk";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

function PersonalRoomo() {
  const { user } = useUser();
  const router = useRouter();
  const { toast } = useToast();
  const client = useStreamVideoClient();
  const meetingId = user?.id;
  const { call } = useGetCallById(meetingId!);
  console.log(user);

  const createCall = async () => {
    if (!client || !user) return;

    if (!call) {
      const newCall = client.call("default", meetingId!);
      await newCall.getOrCreate({
        data: {
          starts_at: new Date().toISOString(),
        },
      });
    }

    router.push(`/meeting/${meetingId}`);
  };

  const meetingLink = `${process.env.NEXT_PUBLIC_BASE_URL}/meeting/${meetingId}`;

  return (
    <section className="flex flex-col size-full gap-3.5">
      <h1 className="font-semibold text-4xl">Personal Room</h1>
      <div className="w-fit rounded-full border-4 border-purple-1 overflow-hidden">
        <Image
          src={user?.imageUrl!}
          alt="user image"
          height={200}
          width={160}
          className="mx-auto lg:mx-0 overflow-hidden"
        />
      </div>

      <div>
        <PersonalItem title="Meeting ID " description={meetingId!} />
        <PersonalItem title="Invite Link " description={meetingLink} />
      </div>
      <div className="flex gap-2">
        <Button className="bg-purple-1" onClick={createCall}>
          Start The Meeting
        </Button>
        <Button
          className="bg-dark-3"
          onClick={() => {
            navigator.clipboard.writeText(meetingLink);
            toast({ title: "Link Copied" });
          }}
        >
          <Image height={20} width={20} src="/icons/copy.svg" alt="icon" />
          &nbsp; Copy Invitation
        </Button>
      </div>
    </section>
  );
}

export default PersonalRoomo;
