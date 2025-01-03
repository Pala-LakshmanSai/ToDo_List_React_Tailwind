import React from "react";

const Tag = ({ tagName, tagButtonClickHandler, tagSelected }) => {
  const tagColor = {
    HTML: "#CF4D6F",
    CSS: "#FF57FF",
    JavaScript: "#FFD400",
    default: "white",
  };

  return (
    <div>
      <button
        className="ml-0 my-1 mr-2 p-2 py-1 border-2 border-gray-400 rounded-md text-xs "
        value={tagName}
        type="button"
        name={tagName}
        onClick={tagButtonClickHandler}
        style={
          (tagSelected)
            ? { backgroundColor: tagColor[tagName]}
            : { backgroundColor:"white"} 
        }
      >
        {tagName}
      </button>
    </div>
  );
};

export default Tag;
