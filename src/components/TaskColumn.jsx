import React from "react";
import Card from "./Card";

const TaskColumn = ({ tasks, columnTitle, icon }) => {
  return (
    <section className="mt-9 w-taskColumnWidth">
      <h2 className="flex items-center text-2xl font-bold">
        <div className="mr-3">{icon}</div>
        <div>{columnTitle}</div>
      </h2>
      <div className="w-11/12">
        {
        tasks.map((task, index) => <Card key={index} title={task.title} tags={task.tags}/>)
        }
      </div>
    </section>
  );
};

export default TaskColumn;
