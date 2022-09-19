import React from "react";
import Image from "next/image";

function SmallCard({ img, location, distance }: any) {
  return (
    <div className="flex items-center">
      <div className="relative h-16 w-16">
        <Image src={img} layout="fill" className="rounded-lg" />
      </div>

      <div className="">
        <h2>{location}</h2>
        <h2>{distance}</h2>
      </div>
    </div>
  );
}

export default SmallCard;
