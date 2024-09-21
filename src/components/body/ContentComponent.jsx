import {
  ArrowRightOutlined,
  CheckOutlined,
  PlayCircleOutlined,
} from "@ant-design/icons";
import React from "react";
import FeatureCards from "../cards/FeatureCards";
import { features, handling } from "../../constants/constants";
import CarouselComponent from "../SliderComponent/CarouselComponent";
import { Divider } from "antd";
import ServiceCalc from "../serviceCalc/ServiceCalc";
import FooterContent from "../footer/FooterContent";

const ContentComponent = () => {
  return (
    <main className="mx-auto container flex flex-col lg:gap-60 gap-40 pb-20 px-5 ">
      <section className="flex flex-col gap-y-5 md:flex-row items-center justify-center  md:justify-around min-h-[80%] lg:h-screen w-full">
        <div>
          <h3 className="font-bold text-3xl md:text-5xl capitalize max-w-[450px] leading-normal   ">
            Create and sell custom products
          </h3>
          <ul className="text-base py-5 px-2 font-semibold ">
            <li>
              <CheckOutlined className="text-green-500 mr-2 " />
              100% Free to use
            </li>
            <li>
              <CheckOutlined className="text-green-500 mr-2 " />
              100% Free to use
            </li>
            <li>
              <CheckOutlined className="text-green-500 mr-2 " />
              100% Free to use
            </li>
          </ul>
          <div className="flex gap-5 items-center">
            <button className="rounded-lg font-semibold text-base hover:bg-green-600 text-white bg-green-400 py-3 px-5 sm:px-10 transition-all duration-200   ">
              Start for free
            </button>
            <button className="rounded-lg font-semibold  transition-all duration-200 text-base border border-gray-300 hover:text-green-600  py-3 px-5 sm:px-10 ">
              <PlayCircleOutlined className="mr-1" />
              How it works?
            </button>
          </div>
          <p className="font-bold mt-2   text-green-500 ">
            Trusted by over 8M sellers around the world
          </p>
        </div>
        <div>
          <img
            src="img/product.png"
            className="md:h-[400px] lg:h-[500px] md:w-[500px] h-[300px]"
            alt="pic"
          />
        </div>
      </section>

      {/* featurees */}
      <section>
        <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5">
          {features.map((ele, ind) => (
            <FeatureCards key={ind} item={ele} />
          ))}
        </div>
      </section>

      {/* add design to products */}
      <section className="flex flex-col md:flex-row justify-around gap-20  items-center">
        <div className="relative bg-green-500 w-fit">
          <img
            src="img/clothes.webp"
            alt="pic"
            className="h-[400px] lg:h-[500px] lg:w-[400px] rounded-md"
          />
          <div className="bg-white sm:p-5 p-2 absolute z-10 -bottom-0 -right-8 md:-right-16 sm:h-60 sm:w-48 w-36 rounded-2xl   ">
            <div className="flex mb-1">
              <p className="border text-center  border-gray-300 rounded-xl w-1/2 md:p-2 py-1">
                Edit
              </p>
              <p className="border text-center  border-gray-300 rounded-xl w-1/2 md:p-2 py-1">
                Preview
              </p>
            </div>
            <img src="img/product.png" alt="pic" />
          </div>
        </div>
        <div className=" md:max-w-96 flex flex-col gap-5">
          <h5 className="text-4xl font-bold ">
            Easily add your design to a wide range of products
          </h5>
          <p className="text-gray-500 ">
            With our free design tools, you can easily add your custom designs
            to t-shirts, mugs, phone cases, and hundreds of other products.{" "}
          </p>
          <button
            type="text"
            className="hover:text-green-500 flex gap-3 text-base font-semibold items-center w-fit"
          >
            All Products
            <ArrowRightOutlined />
          </button>
        </div>
      </section>

      {/* create sell handle */}
      <section>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {handling.map((ele, ind) => (
            <FeatureCards key={ind} item={ele} />
          ))}
        </div>
      </section>

      {/* long card */}
      <section>
        <div className="bg-green-100 md:px-10 px-5  lg:px-20 flex justify-between items-center h-[145px] rounded-xl relative">
          <p className="text-xl md:text-3xl text-green-800 font-bold  lg:max-w-[500px] sm:max-w-[400px] max-w-[200px] relative z-40 ">
            Are you a large business looking for custom solutions?
          </p>
          <button className="relative hover:text-green-600 z-10 bg-white lg:px-5 px-3 py-2 w-max  font-semibold ">
            Talk to sales
          </button>
          <img
            className="absolute bottom-0 right-0 z-0"
            src="https://printify.com/pfh/media/talk-to-sales-N2GDBAGC.svg"
            alt="background-img"
          />
        </div>
      </section>

      {/* customer review  section */}
      <section className=" bg-[#f7f7f7]">
        <div className="flex flex-col md:flex-row gap-10 items-center mb-32">
          <p className="text-5xl text-gray-700 max-w-[500px] font-bold">
            Trusted by over 8M sellers around the world
          </p>
          <p className="text-base max-w-[500px] text-gray-500 ">
            Whether you are just getting started or run an enterprise-level
            e-commerce business, we do everything we can to ensure a positive
            merchant experience.{" "}
          </p>
        </div>
        <CarouselComponent />
      </section>

      {/* service fee calc */}
      <section>
        <div className="rounded-xl  relative bg-[#203741] ">
          <ServiceCalc />
          <div className="absolute lg:w-[500px] lg:h-[650px] right-0 bottom-0 rounded-xl overflow-hidden hidden lg:inline-block">
            <img src="img/service.png" className="contain-content " alt="pic" />
          </div>
        </div>
      </section>
      <footer>
        <FooterContent />
      </footer>
    </main>
  );
};

export default ContentComponent;
