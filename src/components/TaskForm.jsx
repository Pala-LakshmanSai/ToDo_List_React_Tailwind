import React from "react";
import Tag from "./Tag.jsx";
const TaskForm = () => {
  const tagNames = ["HTML", "CSS", "JavaScript", "React"];
  return (
    <header>
      <form className="w-full pt-6 h-full border-b-2 flex justify-center items-center">
        <div className="w-5/12">
          <input
            className="w-full mb-3 border-2 border-gray-400 rounded-md bg-gray-100 p-1.5 px-3 text-md"
            placeholder="Enter your task"
            type="text"
          />
          <div className="flex justify-between items-center">
            <div className="w-11/12 flex">
              {tagNames.map((tagName, index) => (
                <Tag key={index} tagName={tagName} />
              ))}
            </div>
            <div className="w-6/12 flex justify-between items-center">
              <select
                id="dropdown"
                className="w-6/12 h-9 text-xs p-1 outline-none text-gray-500 border-2 border-gray-500 rounded-md"
              >
                <option value="To do">To do</option>
                <option value="In progress">In progress</option>
                <option value="Done">Done</option>
              </select>
              <button className="border-none bg-purple-600 p-2 rounded-md text-md text-white font-medium">
                {" "}
                + Add Task
              </button>
            </div>
          </div>
        </div>
      </form>
    </header>
  );
};

export default TaskForm;
