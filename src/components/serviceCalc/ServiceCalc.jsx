import { Divider } from "antd";
import React from "react";

const ServiceCalc = () => {
  return (
    <div className="w-full lg:w-1/2">
      <div className="max-w-[600px] mx-auto md:px-20 md:py-10 p-5 flex flex-col gap-7 text-white">
        <p className="text-white max-w-96 text-5xl leading-tight font-bold">
          Make Money, Risk-Free
        </p>
        <p className="text-base font-semibold   ">
          You pay for fulfillment only when you make a sale
        </p>
        <div className="bg-[#17262b] py-14 px-14 flex flex-col text-lg font-semibold  gap-3 rounded-xl ">
          <div className="flex justify-between">
            <p>You sell a t-shirt</p>
            <p>$ 30</p>
          </div>
          <div className="flex justify-between">
            <p>You sell a t-shirt</p>
            <p>$ 30</p>
          </div>
          <Divider className="bg-white" />

          <div className="flex justify-between text-2xl text-green-600 font-bold ">
            <p>Your profit</p>
            <p>$ 18</p>
          </div>
        </div>
        <button className="bg-green-500 font-semibold hover:bg-green-700 px-5 py-2 rounded-lg text-base w-fit">
          Start Selling
        </button>
        <div className=" text-sm ">
          <p>100% Free to use · 900+ Products · Largest print network</p>
        </div>
      </div>
    </div>
  );
};

export default ServiceCalc;
