import React from "react";
import Card from "./Card";

const TaskColumn = ({ tasks, setTasks, status, icon }) => {

  const deleteHandler = (index) => {
    const tasksAfterDelete = tasks.filter((task, indx) => indx !== index)
    setTasks(tasksAfterDelete)
  }

  return (
    <section className="mt-9 w-taskColumnWidth">
      <h2 className="flex items-center text-2xl font-bold">
        <div className="mr-3">{icon}</div>
        <div>{status}</div>
      </h2>
      <div className="w-11/12">
      {
      tasks.map((task, index) => task.status == status && <Card index={index} deleteHandler={() => {
        deleteHandler(index)}} key={index} title={task.task} tags={task.tags}/>)
      }
      </div>
    </section>
  );
};

export default TaskColumn;
