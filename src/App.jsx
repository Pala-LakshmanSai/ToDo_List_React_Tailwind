import React, { useEffect, useState } from "react";
import TaskForm from "./components/TaskForm";
import TaskColumn from "./components/TaskColumn";
import { TbTargetArrow } from "react-icons/tb";
import { GrInProgress } from "react-icons/gr";
import { IoCheckmarkDoneCircleSharp } from "react-icons/io5";

const oldTasks = localStorage.getItem("tasks") || localStorage.setItem("tasks", JSON.stringify([]));
const App = () => {
  const [tasks, setTasks] = useState(JSON.parse(oldTasks));

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <div className="grid grid-rows-custom">
      <TaskForm setTasks={setTasks} />
      <main className="flex justify-evenly mx-14">
        <TaskColumn
          setTasks={setTasks}
          tasks={tasks}
          icon={<TbTargetArrow />}
          status="To do"
        />
        <TaskColumn
          setTasks={setTasks}
          tasks={tasks}
          icon={<GrInProgress />}
          status="In progress"
        />
        <TaskColumn
          setTasks={setTasks}
          tasks={tasks}
          icon={<IoCheckmarkDoneCircleSharp />}
          status="Done"
        />
      </main>
    </div>
  );
};

export default App;
