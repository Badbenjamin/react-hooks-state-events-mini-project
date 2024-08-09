import React from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";
import { useState } from "react";

import { CATEGORIES, TASKS } from "../data";
// console.log("Here's the data you're working with");
// console.log({ CATEGORIES, TASKS });

function App() {
  const [myTasks, setMyTasks] = useState(TASKS)
  // const [filterState, setFilterState] = useState("")
  const [isSelected, setIsSelected] = useState("")

  function deleteTask(text) {

    const newTasks = myTasks.filter(task => {
      return task.text !== text;
    })
    setMyTasks(newTasks)
  }

  function handleClick(category) {
    const selectedCategory = category
    setIsSelected(selectedCategory)

  }


  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter isSelected={isSelected} categories={CATEGORIES} onClick={handleClick} />
      <NewTaskForm />
      <TaskList tasks={myTasks} deleteTask={deleteTask} />
    </div>
  );
}

export default App;
