// import React, { useState, useEffect } from "react";
import Link from "next/link";
import { BsBagCheckFill } from "react-icons/bs";


const successPay = () => {

  // useEffect(() => {

      
  // }, []);

  return (
    <div className="success">
      <p className="icon">
        <BsBagCheckFill size={80} />
      </p>
      <h1>Thank you for your order!</h1>
      <p>Check your email inbox for the receipt</p>
      <p className="description">
        If you have any questions, please email
        <a href="mailto:dinemarket@example.com">dinemarket@example.com</a>
      </p>
      <Link href="/">
        <button className="btn" type="button">
          Continue Shopping
        </button>
      </Link>
    </div>
  );
};

export default successPay;
