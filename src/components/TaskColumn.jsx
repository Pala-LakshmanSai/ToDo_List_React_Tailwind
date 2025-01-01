import React from "react";
import Card from "./Card";

const TaskColumn = ({ title, icon }) => {
  return (
    <section className="mt-9 w-3/12">
      <h2 className="flex items-center text-2xl font-bold">
        <div className="mr-3">{icon}</div>
        <div>{title}</div>
      </h2>
      <div>
        <Card tags={["HTML", "CSS"]} />
        <Card tags={["HTML", "CSS"]} />
      </div>
    </section>
  );
};

export default TaskColumn;
