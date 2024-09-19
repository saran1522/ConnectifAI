"use client";
import React from "react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { sidebarLinks } from "@/constants";
import { usePathname } from "next/navigation";

function MobileNav() {
  const pathname = usePathname();
  return (
    <nav>
      <Sheet>
        <SheetTrigger>
          <Image src="/icons/hamburger.svg" alt="nav" height={32} width={32} />
        </SheetTrigger>
        <SheetContent side="left" className="bg-dark-2 border-none">
          <Link href="/" className="flex gap-5 items-center">
            <Image
              src="/icons/logo3.svg"
              height={35}
              width={35}
              alt="join meeting"
              className="cursor-pointer"
            ></Image>
            <div>
              <p className="text-lg font-semibold">ConnectifAI</p>
            </div>
          </Link>
          <div className="flex justify-between flex-col h-[calc(100vh-72px)] overflow-y-auto">
            <SheetClose asChild>
              <section className="h-full flex flex-col gap-6 pt-16">
                {sidebarLinks.map((link) => {
                  const isActive = link.route === pathname;
                  return (
                    <SheetClose asChild key={link.label}>
                      <Link
                        href={link.route}
                        key={link.label}
                        className={cn(
                          "p-3 flex w-full items-center gap-6 rounded-xl",
                          { "bg-purple-1 rounded-xl": isActive }
                        )}
                      >
                        <Image
                          src={link.imgURL}
                          alt={link.label}
                          height={24}
                          width={24}
                        />
                        <p className="font-bold text-lg">{link.label}</p>
                      </Link>
                    </SheetClose>
                  );
                })}
              </section>
            </SheetClose>
          </div>
        </SheetContent>
      </Sheet>
    </nav>
  );
}

export default MobileNav;
