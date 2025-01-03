import React, { useState } from "react";
import Tag from "./Tag.jsx";
const TaskForm = ({ setTasks }) => {
  const defaultTagNames = ["HTML", "CSS", "JavaScript"];

  const [taskData, setTaskData] = useState({
    task: "",
    status: "To do",
    tags: [],
  });

  const taskDataChangeHandler = (e) => {
    const { name, value } = e.target;
    setTaskData((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
  };

  const inputEnterHandler = (e) => {
    if (e.key == "Enter") {
      e.preventDefault();
    }
  };

  const tagButtonClickHandler = (e) => {
    if (taskData.tags.some((tag) => tag == e.target.name)) {
      const filteredTags = taskData.tags.filter((tag) => tag !== e.target.name);
      setTaskData((prev) => {
        return { ...prev, tags: filteredTags };
      });
    } else {
      setTaskData((prev) => {
        return { ...prev, tags: [...prev.tags, e.target.name] };
      });
    }
  };

  const checkTag = (tagName) => {
    if (taskData.tags.some(tag => tag == tagName)) {
      return true;
    }
    else {
      return false;
    }
  }

  const addTaskHandler = () => {
    if (taskData.task == "") {
      alert("task is empty");
    } else {
      setTasks((prev) => {
        return [...prev, taskData];
      });
    }
    setTaskData({
      task: "",
      status: "To do",
      tags: [],
    })

  };

  return (
    <header>
      <form
        onSubmit={submitHandler}
        className="w-full pt-6 h-full border-b-2 flex justify-center items-center"
      >
        <div className="w-5/12">
          <input
            name="task"
            className="w-full mb-3 border-2 border-gray-400 rounded-md bg-gray-100 p-1.5 px-3 text-md"
            placeholder="Enter your task"
            type="text"
            value={taskData.task}
            onChange={taskDataChangeHandler}
            onKeyDown={inputEnterHandler}
          />
          <div className="flex justify-between items-center">
            <div className="w-11/12 flex">
              {defaultTagNames.map((tagName, index) => (
                <Tag
                  name={tagName}
                  key={index}
                  tagButtonClickHandler={tagButtonClickHandler}
                  tagName={tagName}
                  tagSelected = {checkTag(tagName)} 
                />
              ))}
            </div>
            <div className="w-6/12 flex justify-between items-center">
              <select
                name="status"
                id="dropdown"
                className="w-6/12 h-9 text-xs p-1 outline-none text-gray-500 border-2 border-gray-500 rounded-md"
                onChange={taskDataChangeHandler}
                value={taskData.status}
              >
                <option value="To do">To do</option>
                <option value="In progress">In progress</option>
                <option value="Done">Done</option>
              </select>
              <button
                onClick={addTaskHandler}
                className="border-none bg-purple-600 p-2 rounded-md text-md text-white font-medium"
              >
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
