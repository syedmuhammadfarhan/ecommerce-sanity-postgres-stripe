import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FiShoppingCart } from "react-icons/fi";

export default function Hero() {
  return (
    <div className="border flex justify-between gap-[4rem] pt-16">
      <div className=" flex flex-1 flex-col justify-between border border-gray-400 py-10">
        <span className="bg-[#e1edff] font-[600] text-indigo-700 text-lg py-2 px-6 rounded-md max-w-fit">
          Sale 70%
        </span>
        <h1 className="text-6xl font-extrabold">
          An Industrial Take on Streetwear
        </h1>
        <p className="text-lg text-gray-400 font-light">
          Anyone can beat you but no one can beat your outfit as long as you
          wear Dine outfits.
        </p>
        <Link href="" className="">
          <button
            type="button"
            className="flex justify-between items-center bg-black px-4 py-2 text-white w-[30%] text-center font-bold text-md border-2 border-gray-400"
          >
            <FiShoppingCart size={20} color="white" />
            Start Shopping
          </button>
        </Link>
        <div className="flex gap-x-6">
          <Image
            src="/Featured1.png"
            alt="Feature1"
            width={110}
            height={110}
          ></Image>
          <Image
            src="/Featured2.png"
            alt="Feature1"
            width={110}
            height={110}
          ></Image>
          <Image
            src="/Featured3.png"
            alt="Feature1"
            width={110}
            height={110}
          ></Image>
          <Image
            src="/Featured4.png"
            alt="Feature1"
            width={110}
            height={110}
          ></Image>
        </div>
      </div>
      <div className="border flex flex-1 justify-center">
        <div className="bg-[#FFECE3] relative w-[580px] h-[580px] rounded-full  flex-1">
          <Image
            src="/header.png"
            alt="hero"
            width={650}
            height={650}
            className="absolute"
          />
        </div>
      </div>
    </div>
  );
}
