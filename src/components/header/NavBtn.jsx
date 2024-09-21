import React from "react";
import { menuItems } from "../../constants/constants";
import { Popover } from "antd";
import MenuChildren from "./MenuChildren";
import { CloseOutlined, DownOutlined, UpOutlined } from "@ant-design/icons";
import { twMerge } from "tailwind-merge";
import clsx from "clsx";

const NavBtn = ({ vertical, handleMenu, className }) => {
  return (
    <ul
      className={twMerge(
        clsx("flex gap-8 items-center", {
          "flex-col fixed h-screen top-0 pt-5 items-start ps-10 bg-white z-30 w-[200px] left-0":
            vertical,
        }),
        className
      )}
    >
      {vertical && (
        <CloseOutlined
          className="ml-auto mr-3 text-gray-600 hover:text-red-600 text-2xl "
          onClick={() => handleMenu()}
        />
      )}
      {menuItems.map((ele, id) =>
        ele?.children ? (
          <Popover
            className="group"
            placement={vertical ? "right" : "bottom"}
            content={<MenuChildren items={ele?.children} />}
          >
            <li className="capitalize text-base   font-medium cursor-pointer hover:text-green-500 flex items-center transition-all duration-300 ">
              {ele.name}
              <DownOutlined className="text-sm ml-1 group-hover:hidden " />
              <UpOutlined className=" hidden text-sm ml-1 group-hover:inline-block" />
            </li>
          </Popover>
        ) : (
          <li
            className="cursor-pointer  transition-all duration-300hover:text-green-500 capitalize text-base   font-medium "
            key={id}
          >
            {ele.name}
          </li>
        )
      )}
    </ul>
  );
};

export default NavBtn;
