import React, { useState } from "react";
import { Button } from "antd";
import NavBtn from "./NavBtn";
import { BarsOutlined } from "@ant-design/icons";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenu = (e) => setMenuOpen(e);

  return (
    <nav className="container mx-auto flex justify-between">
      <div className="flex gap-4">
        <div className="relative">
          <BarsOutlined
            className="text-2xl lg:hidden"
            onClick={() => setMenuOpen(true)}
          />
          {menuOpen && (
            <div>
              <div
                className="fixed h-screen w-screen z-20 bg-black/30 top-0 left-0  "
                onClick={() => setMenuOpen(false)}
              ></div>
              <NavBtn vertical={true} handleMenu={handleMenu} />
            </div>
          )}
        </div>
        <img
          src="https://printify.com/pfh/media/logo-old-B5JY5YNQ.svg"
          alt="logo"
          className="h-16 w-32"
        />
      </div>

      <NavBtn className="hidden lg:flex" />

      <div className="flex gap-2 items-center">
        <Button className="text-base h-10">Log in</Button>
        <button
          type=""
          className="bg-green-500 border-none text-white h-10 text-base hover:bg-green-700 rounded-lg w-20 transition-all duration-300"
        >
          Sign up
        </button>
      </div>
    </nav>
  );
};

export default Header;
