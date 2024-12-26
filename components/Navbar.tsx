import Image from "next/image";
import Link from "next/link";
import React from "react";
import MobileNav from "./MobileNav";
import { SignedIn, UserButton } from "@clerk/nextjs";

function Navbar() {
  return (
    <nav className=" flex-between absolute z-50 px-6 py-4 w-full bg-transparent lg:px-6">
      <Link href="/" className="flex gap-2 items-center">
        <Image
          src="/icons/icon.png"
          height={35}
          width={35}
          alt="join meeting"
          className="cursor-pointer"
        ></Image>
        <p className="text-blue-600 text-2xl font-semibold max-sm:hidden">
          ConnectifAI
        </p>
      </Link>
      <div className="flex items-center gap-5">
        <SignedIn>
          <UserButton />
        </SignedIn>
        <div className="md:hidden">
          <SignedIn>
            <MobileNav />
          </SignedIn>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
