import React from "react";
import Tag from "./Tag";
import { MdDeleteForever } from "react-icons/md";

const Card = ({ title, tags }) => {
  return (
    <div className="w-full border-2 rounded-lg p-3  my-4">
      <p className="font-semibold font-sans">{title}</p>
      <div className="flex justify-between items-center pt-4 pr-5">
        <div className="flex flex-wrap">
          {tags.map((tag, index) => (
            <Tag key={index} tagName={tag} />
          ))}
        </div>
        <div className="w-2/12"></div>
        <div>
          <MdDeleteForever className="w-6 h-6 opacity-30 transition-all duration-600 ease-in-out cursor-pointer hover:opacity-100"/>
        </div>
      </div>
    </div>
  );
};

export default Card;
