import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <>
      <div className="text-6xl container font-bold mx-auto">
        this is next js
      </div>
      <Image
        src="https://i.ibb.co/61VVmyf/1672053707090-01.jpg"
        alt="porfile"
        width={500}
        height={500}
      />
    </>
  );
};

export default page;
