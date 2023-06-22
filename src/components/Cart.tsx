"use client";
import React from "react";
import { cartItems } from "@/drizzle/lib/drizzle";
import { TiTrash } from "react-icons/Ti";
import { useRouter } from "next/navigation";

const BASE_URL =
  process.env.NODE_ENV == "development"
    ? "http://localhost:3000"
    : "https://todo-postgres-blue.vercel.app";

export async function getData() {
  try {
    const res = await fetch(`${BASE_URL}/api/cart`, {
      cache: "no-store",
    });
    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }
    return await res.json();
  } catch (error) {
    console.log((error as { message: string }).message);
  }
}

export default async function Cart() {
  const { refresh } = useRouter();
  const res: cartItems[] = await getData();
  console.log(`cart page`, res);

  return (
    <div>
      <div>
        <h1 className="text-xl font-extrabold mt-12 mb-6">Shopping Cart</h1>
      </div>
          {res.map((items) => (
    
      <div className="flex border border-red-400">
        <div className="flex-none border border-red-400 h-48 w-44 rounded-lg mr-5">
          image
        </div>
        <div className="border border-red-400 w-full p-2 flex flex-col justify-between">
          <div className="flex justify-between">
            <div>title</div>
            <div className="hover:shadow-lg">
              <TiTrash size={25} />
            </div>
          </div>
          <div>generic.name</div>
          <div className="font-bold">Delivery Estimation</div>
          <div className="text-pink-500 font-bold">5 Working Days</div>
          <div>Price</div>
        </div>
        <div className="bg-gray-200 p-2 w-64 h-48 flex-none flex flex-col justify-between">
          <div className="border border-red-400">
            <h2 className="text-xl font-bold">Order Summary</h2>
          </div>
          <div className="border border-red-400 flex justify-between">
            <span>Quantity:</span>
            <span>{items.quantity}</span>
          </div>
          <div className="border border-red-400 flex justify-between">
            <span>Sub Total:</span>
            <span>sum</span>
          </div>
          <div className="border bg-black text-white p-2 rounded-lg text-sm text-center">
            <button>Proceed to Checkout</button>
          </div>
        </div>
      </div>
))}
    </div>
  );
}
