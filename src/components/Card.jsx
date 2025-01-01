import React from "react";
import Tag from "./Tag";
import { MdDeleteForever } from "react-icons/md";

const Card = ({ tags }) => {
  return (
    <div className="w-full border-2 rounded-lg p-3 my-4">
      <div>Change Delete Icon</div>
      <div className="flex justify-between items-center pt-4 pr-5">
        <div className="flex">
          {tags.map((tag, index) => (
            <Tag key={index} tagName={tag} />
          ))}
        </div>
        <div>
          <MdDeleteForever />
        </div>
      </div>
    </div>
  );
};

export default Card;
