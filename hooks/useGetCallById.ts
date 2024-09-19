"use client";
import { Call, useStreamVideoClient } from "@stream-io/video-react-sdk";
import { useEffect, useState } from "react";

export function useGetCallById(id: string | string[]) {
  const [isCallLoading, setIsCallLoading] = useState(true);
  const [call, setCall] = useState<Call>();
  const client = useStreamVideoClient();
  useEffect(() => {
    async function getCall() {
      if (!client) return;
      const { calls } = await client.queryCalls({
        filter_conditions: { id },
      });

      if (calls.length > 0) setCall(calls[0]);

      setIsCallLoading(false);
    }

    getCall();
  }, [client, id]);

  return { call, isCallLoading };
}
