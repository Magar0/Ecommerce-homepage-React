import React from "react";

const MenuChildren = ({ items }) => {
  return items.map((ele, id) => <p className="hover:text-green-400 text-lg w-24 cursor-pointer" key={id}>{ele}</p>);
};

export default MenuChildren;
