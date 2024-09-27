import React from "react";

function Loader() {
  return (
    <div className="h-full flex justify-center items-center">
      <div className="m-auto loading-spin h-[100px] w-[100px] rounded-full border-8 border-gray-400 border-t-gray-700 "></div>
    </div>
  );
}

export default Loader;
