import React from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";
import { useState } from "react";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
const [myTasks, setMyTasks] = useState(TASKS)

function deleteTask (text){
  
  // Look over this logic
  const newTasks = myTasks.filter(task => {
    return task.text !== text;
  })
  setMyTasks(newTasks)
}

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter />
      <NewTaskForm />
      <TaskList tasks={myTasks} deleteTask={deleteTask}/>
    </div>
  );
}

export default App;
