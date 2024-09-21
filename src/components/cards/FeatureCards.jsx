import React from "react";

const FeatureCards = ({ item }) => {
  console.log(item);
  return (
    <div className="flex flex-col gap-5 max-w-[370px] sm:mx-0 mx-auto ">
      <img
        src={item.img}
        className="h-[150px] w-[150px] mx-auto sm:mx-0"
        alt="pic"
      />
      <div>
        {item?.subTitle && (
          <p className="text-green-600 uppercase font-semibold ">
            {item?.subTitle}
          </p>
        )}
        <p className="text-2xl capitalize font-semibold  ">{item.title}</p>
      </div>
      <p className="text-base ">{item.desc}</p>
    </div>
  );
};

export default FeatureCards;
