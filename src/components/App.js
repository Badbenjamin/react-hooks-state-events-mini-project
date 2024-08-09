import React from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";
import { useState } from "react";

import { CATEGORIES, TASKS } from "../data";
// console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [myTasks, setMyTasks] = useState(TASKS)
  const [filterSelection, setFilterSelection] = useState("All")
  const [isSelected, setIsSelected] = useState("All")

  function deleteTask(text) {

    const newTasks = myTasks.filter(task => {
      return task.text !== text;
    })
    setMyTasks(newTasks)
  }

  function handleClick(category) {
    // const selectedCategory = category
    setIsSelected(category)

    setFilterSelection(category)
  }


  // TRY TO GET FORM TO ONLY SUBMIT WHEN FILLED OUT
  function onTaskFormSubmit(formData){
    console.log(formData.text)
   
      setMyTasks([...myTasks, formData])
    
  }


  const filteredTasks = myTasks.filter(tasks => {
    // console.log("TC", tasks.category)
    // console.log("FS", filterSelection)
    if (filterSelection === "All") {
      return tasks
    } else {
      return tasks.category === isSelected
    }

  })

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter isSelected={isSelected} categories={CATEGORIES} onClick={handleClick} />
      <NewTaskForm onTaskFormSubmit={onTaskFormSubmit} categories={CATEGORIES} />
      <TaskList tasks={filteredTasks} deleteTask={deleteTask} />
    </div>
  );
}

export default App;
