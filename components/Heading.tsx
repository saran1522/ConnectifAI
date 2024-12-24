import React from "react";

function Heading({
  text1,
  text2,
  description,
}: {
  text1: string;
  text2: string;
  description?: string;
}) {
  return (
    <>
      <h3 className="text-center text-4xl lg:text-5xl mb-2 lg:mb-6 font-semibold">
        {text1}
        <span className="bg-gradient-to-r from-sky-500 to-indigo-600 text-transparent bg-clip-text">
          {text2}
        </span>
      </h3>
      <p className="text-center max-md:px-4 lg:text-xl text-base">
        {description}
      </p>
    </>
  );
}

export default Heading;
