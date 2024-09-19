import Image from "next/image";
import React from "react";

function Loader() {
  return (
    <div className="min-h-fit">
      <div className="m-auto loading-spin h-[100px] w-[100px] rounded-full border-8 border-gray-400 border-t-gray-700 "></div>
    </div>
  );
}

export default Loader;
