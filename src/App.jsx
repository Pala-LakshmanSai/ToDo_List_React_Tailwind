import React from "react";
import TaskForm from "./components/TaskForm";
import TaskColumn from "./components/TaskColumn";
import { TbTargetArrow } from "react-icons/tb";
import { GrInProgress } from "react-icons/gr";
import { IoCheckmarkDoneCircleSharp } from "react-icons/io5";

const App = () => {
  const tasks = [
    {
      title: "Delete Icon",
      tags: ["HTML"],
      type: "Done"
    },
    {
      title: "go to gym",
      tags: ["HTML", "CSS"],
      type: "In progress"
    },
    {
      title: "drink water",
      tags: ["HTML", "CSS", "JavaScript"],
      type: "To do"
    },
  ];

  const toDOTasks = tasks.filter(task => task.type == "To do");
  const InProgressTasks = tasks.filter(task => task.type == "In progress");
  const DoneTasks = tasks.filter(task => task.type == "Done");
  
  return (
    <div className="grid grid-rows-custom">
      <TaskForm />
      <main className="flex justify-evenly">
        <TaskColumn icon={<TbTargetArrow />} title="To do" />
        <TaskColumn icon={<GrInProgress />} title="In progress" />
        <TaskColumn icon={<IoCheckmarkDoneCircleSharp />} title="Done" />
      </main>
    </div>
  );
};

export default App;
