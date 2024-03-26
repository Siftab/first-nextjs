import Image from "next/image";
import React from "react";
import localImage from "@/assests/image.png";

const page = () => {
  return (
    <>
      <div className="container mx-auto mt-6 text-6xl font-bold">
        Hi ,i am zahid hossain <span className="text-blue-600">Sifat</span>
      </div>
      {/* <Image
        src="https://i.ibb.co/61VVmyf/1672053707090-01.jpg"
        alt="porfile"
        className="absolute left-14 top-1/4 w-[200px] rounded-full"
        width={200}
        height={100}
      /> */}
      <Image
        src={localImage}
        // layout="fill"
        alt="local"
        width={0}
        height={0}
        className=" h-screen w-full"
      ></Image>
    </>
  );
};

export default page;
