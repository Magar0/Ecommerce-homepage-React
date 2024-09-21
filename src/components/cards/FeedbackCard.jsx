import { Rate } from "antd";
import React from "react";

const FeedbackCard = ({ item }) => {
  return (
    <div>
      <div className="flex gap-5">
        <div className="h-16  w-16 rounded-lg overflow-hidden  ">
          <img src={item.img} className="contain-content    " alt="pic" />
        </div>
        <div className="flex flex-col items-start ">
          <p className="text-2xl font-bold ">{item.name}</p>
          <a href="#" className=" text-sm  text-green-500 capitalize mb-2 ">
            {item.sub}
          </a>
          <Rate disabled defaultValue={item.rate} />
        </div>
      </div>
      <p>{item.desc}</p>
    </div>
  );
};

export default FeedbackCard;
