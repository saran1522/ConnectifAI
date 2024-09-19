import Image from "next/image";
import Link from "next/link";
import React from "react";
import MobileNav from "./MobileNav";
import { SignedIn, UserButton } from "@clerk/nextjs";

function Navbar() {
  return (
    <nav className=" flex-between fixed z-50 px-6 py-4 w-full bg-dark-2 lg:px-6">
      <Link href="/" className="flex gap-2 items-center">
        <Image
          src="/icons/logo3.svg"
          height={35}
          width={35}
          alt="join meeting"
          className="cursor-pointer"
        ></Image>
        <p className="text-[#9bf2f5] text-2xl font-semibold max-sm:hidden">
          ConnectifAI
        </p>
      </Link>
      <div className="flex items-center gap-5">
        <SignedIn>
          <UserButton />
        </SignedIn>
        <div className="md:hidden">
          <MobileNav />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;