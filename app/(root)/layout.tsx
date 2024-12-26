import StreamVideoProvider from "@/Providers/StreamClientProvider";
import { Metadata } from "next";
import React, { ReactNode } from "react";

export const metadata: Metadata = {
  title: "ConnectifAI",
  description: "An AI powered video conferencing platform",
  icons: {
    icon: "/icons/icon.png",
  },
};

function RootLayout({ children }: { children: ReactNode }) {
  return (
    <main>
      <StreamVideoProvider>{children}</StreamVideoProvider>
    </main>
  );
}

export default RootLayout;
