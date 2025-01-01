import React from "react";

const Tag = ({ tagName }) => {
  return (
    <div>
      <button
        className="ml-0 mr-2 p-2 py-1 border-2 border-gray-400 rounded-md text-xs"
      >
        {tagName}
      </button>
    </div>
  );
};

export default Tag;
