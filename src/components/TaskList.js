import React from "react";
import Task from "./Task";

function TaskList({ tasks, deleteTask }) {
  // console.log(TASKS)
  const eachTask = tasks.map((task) => {
    // console.log(task.text)
    return <Task
      key={task.text}
      text={task.text}
      category={task.category}
      deleteTask={deleteTask}

    />

  })
  return (
    <div className="tasks">
      {eachTask}
    </div>
  );
}

export default TaskList;
