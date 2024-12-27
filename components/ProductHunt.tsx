import Image from "next/image";
import React from "react";

function ProductHunt() {
  return (
    <div>
      <a
        href="https://www.producthunt.com/posts/connectifai?embed=true&utm_source=badge-featured&utm_medium=badge&utm_souce=badge-connectifai"
        target="_blank"
        className="bg-blue-400"
      >
        <Image
          src={`https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=737549&theme=light`}
          alt="ConnectifAI - An AI powered video conferencing platform | Product Hunt"
          width="250"
          height="54"
          className="bg-transparent"
        />
      </a>
    </div>
  );
}

export default ProductHunt;
