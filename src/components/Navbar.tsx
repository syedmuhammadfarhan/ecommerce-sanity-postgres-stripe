"use client";
import React, { ReactNode, useState } from "react";
import Image from "next/image";
import { FiAlignRight, FiSearch, FiShoppingCart, FiX } from "react-icons/fi";
import { navItems } from "@/Data/Navbar-data";
import Link from "next/link";
import { getData } from "./Cart";
import { cartItems } from "@/drizzle/lib/drizzle";

export default async function Navbar() {
  const [mobNav, setMobNav] = useState(false);
  const res: cartItems[] = await getData();
  console.log(`navbar`, res.length);

  return (
    <>
      <div className="border pt-8 pb-2 px-2 flex justify-between">
        {/* logo */}
        <Link href="/">
          <div className="py-[0.45rem] bg-red-400">
            <Image
              src="/Logo.png"
              alt="dinemartlogo"
              height={100}
              width={140}
            />
          </div>
        </Link>
        {/* navbar items */}
        <div className="hidden lg:flex justify-between items-center gap-x-20">
          {navItems.map((items: { navList: string; href: string }, i) => {
            return (
              <div key={i} className="text-md lg:text-md">
                <Link href={items.href}>{items.navList}</Link>
              </div>
            );
          })}
        </div>
        {/* search box */}
        <div className="hidden lg:flex justify-center items-center  rounded-lg gap-2 pl-2 relative">
          <FiSearch className="absolute left-4" />
          <input
            type="text"
            className="w-[22rem] h-8 text-sm font-thin border rounded-lg pl-8"
            placeholder="What are you looking for"
          />
        </div>
        {/* cart */}
        <Link href="/cart/cart">
          <div className="relative w-11 h-11 rounded-full bg-gray-200 justify-center items-center hidden lg:flex">
            <div className="absolute top-0 right-0 w-5 h-5 rounded-full bg-red-500 text-xs text-center place-items-center text-white">
              {res.length}
            </div>
            <FiShoppingCart size={20} />
          </div>
        </Link>
        {/* Hamburger icon*/}
        <div onClick={() => setMobNav(!mobNav)} className="lg:hidden">
          <FiAlignRight size="25" className="cursor-pointer  my-1.5" />
        </div>
        {mobNav && (
          // <div className="fixed md:hidden left-0 top-0 w-full h-screen bg-black/70">
          <div className="fixed  right-0 top-0 w-[100%] h-screen bg-white px-4 pt-6 ease-in duration-500">
            <div className="flex justify-between pt-4">
              <div>
                <Image src="/Logo.png" alt="logo" width={140} height={40} />
              </div>
              <FiX
                size={25}
                onClick={() => {
                  setMobNav(!mobNav);
                }}
                className="cursor-pointer"
              />
            </div>
            <div className="leading-10 pt-10 text-md flex flex-col justify-center items-center text-center">
              <div className="w-11 h-11 rounded-full bg-gray-200 flex justify-center items-center my-3">
                <FiShoppingCart size={20} />
              </div>
              <ul>
                {navItems.map((items: { navList: string; href: string }, i) => (
                  <li
                    onClick={() => {
                      setMobNav(!mobNav);
                    }}
                    key={i}
                  >
                    <Link href={items.href}>{items.navList}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          // </div>
        )}
      </div>
    </>
  );
}
