import React from "react";
import Task from "./Task";

function TaskList({TASKS}) {
// console.log(TASKS)
  const eachTask = TASKS.map(task => {
    // console.log(task.text)
    return <Task key={task.text} text={task.text} />
    
  })
  return (
    <div className="tasks">
      {eachTask}
    </div>
  );
}

export default TaskList;
