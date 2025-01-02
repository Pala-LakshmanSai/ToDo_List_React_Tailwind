import React from "react";

const Tag = ({ tagName }) => {

  return (
    <div>
      <button
        className="ml-0 my-1 mr-2 p-2 py-1 border-2 border-gray-400 rounded-md text-xs hover:bg-red-600 focus:ring-2 focus:bg-green-400"
        value={tagName}
        type="button"
      >
        {tagName}
      </button>
    </div>
  );
};

export default Tag;
