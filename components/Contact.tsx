"use client";
import React from "react";
import { FaGithub, FaEnvelope } from "react-icons/fa6";

function Contact() {
  return (
    <div className="pt-28 text-slate-500 ">
      <div className="flex gap-10 justify-center max-md:gap-4 bg-gray-900 flex-wrap w-full p-4">
        <p>© ConnectifAI</p>
        <FaGithub
          size={24}
          onClick={() =>
            window.open("https://github.com/saran1522/ConnectifAI", "_blank")
          }
          className="cursor-pointer"
        />
        <FaEnvelope
          size={24}
          onClick={() =>
            window.open(
              "https://mail.google.com/mail/?view=cm&fs=1&to=saransinha205@gmail.com",
              "_blank"
            )
          }
          className="cursor-pointer"
        />
        <p className="">saransinha205@gmail.com</p>
      </div>
    </div>
  );
}

export default Contact;
