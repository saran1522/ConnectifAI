"use client";
import { sidebarLinks } from "@/constants";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

function Sidebar() {
  const pathname = usePathname();
  return (
    <section className="shadow-2xl sticky left-0 top-0 flex h-screen w-fit flex-col justify-between bg-dark-1 p-4 pt-28 max-sm:hidden lg:w-[260px]">
      {sidebarLinks.map((link) => {
        const isActive =
          link.route === pathname || pathname.startsWith(`${link.route}/`);
        return (
          <Link
            href={link.route}
            key={link.label}
            className={cn(
              "p-3 flex items-center justify-start gap-4 rounded-xl hover:bg-dark-2",
              {
                "bg-[linear-gradient(to_bottom_right,#0088ff,#2d00f7)] rounded-xl":
                  isActive,
              }
            )}
          >
            <Image src={link.imgURL} alt={link.label} height={24} width={24} />
            <p className="font-bold text-lg max-lg:hidden">{link.label}</p>
          </Link>
        );
      })}
    </section>
  );
}

export default Sidebar;
