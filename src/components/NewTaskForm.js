import React from "react";

function NewTaskForm({categories}) {
  console.log(categories)
  const categoryList = categories.map(category => <option>{category}</option>)
  

  return (
    <form className="new-task-form">
      <label>
        Details
        <input type="text" name="text" />
      </label>
      <label>
        Category
        <select name="category">
          {categoryList}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
