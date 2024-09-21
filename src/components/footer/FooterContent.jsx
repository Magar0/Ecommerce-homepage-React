import React from "react";
import { footerLink, socialLink } from "../../constants/constants";

const FooterContent = () => {
  return (
    <div>
      <div className="flex flex-col md:flex-row justify-between items-center">
        <img
          src="https://printify.com/pfh/media/logo-old-B5JY5YNQ.svg"
          alt="logo"
          className="h-16 w-32"
        />
        <ul className="flex gap-5">
          {socialLink.map((ele, ind) => (
            <a
              className="text-xl bg-green-500 rounded-full text-white h-9 w-9 md:h-11 flex items-center justify-center md:w-11 hover:text-white transition-all duration-300 hover:bg-green-700"
              key={ind}
              title={ele.name}
            >
              {ele.icon}
            </a>
          ))}
        </ul>
      </div>
      <div className="grid lg:grid-cols-4 grid-cols-2 mt-8 gap-y-10">
        {footerLink.map((ele, ind) => (
          <div>
            <p className="text-lg font-semibold mb-5">{ele.title}</p>
            <ul className="flex flex-col gap-3">
              {ele.list.map((ele, ind) => (
                <a
                  className="text-sm hover:text-green-500 "
                  href={ele.link}
                  key={ind}
                >
                  {ele.name}
                </a>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FooterContent;
