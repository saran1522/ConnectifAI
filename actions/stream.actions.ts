"use server";

import { currentUser } from "@clerk/nextjs/server";
import { StreamClient } from "@stream-io/node-sdk";

const apiKey = process.env.NEXT_PUBLIC_STREAM_API_KEY;
const apiSecret = process.env.STREAM_SECRET_KEY;

export async function tokenProvider() {
  const user = await currentUser();

  if (!user) throw new Error("user not logged in");
  if (!apiKey) throw new Error("Stream API key is missing");
  if (!apiSecret) throw new Error("Stream API secret is missing");

  const client = new StreamClient(apiKey, apiSecret);
  const expirationTime = Math.floor(Date.now() / 1000) + 3600;
  const issuedAt = Math.floor(Date.now() / 1000) - 60;
  const token = client.createToken(user.id, expirationTime, issuedAt);

  return token;
}
