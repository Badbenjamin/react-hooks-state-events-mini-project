import {React, useState} from "react";

function NewTaskForm({categories, onTaskFormSubmit}) {
  const [formData, setFormData] = useState({
    text: "",
    category: ""
  })
  
  // console.log(formData)

  function handleChange(event){
    // console.log(event.target.name)
    // console.log(event.target.value)
    // const newFormData = {[event.target.name]: event.target.value}
    setFormData({...formData, [event.target.name]: event.target.value})
    
  }

  console.log(formData)

  const categoryList = categories.map(category => {
    if (category !== "All" ) {
      return <option key={category}>{category}</option>
    }
})

function handleSubmit(e){
  e.preventDefault();
  onTaskFormSubmit(formData)
}
  
// console.log(formData.category)

  return (
    <form onSubmit={handleSubmit}className="new-task-form">
      <label>
        Details
        <input onChange={handleChange} type="text" name="text" value={formData.name}/>
      </label>
      <label>
        Category
        <select onChange={handleChange} name="category" value={formData.category}>
          {categoryList}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
