import React from "react";
// import { useState } from "react";

function CategoryFilter({ categories, onClick, isSelected }) {

  // console.log(isSelected)
  // console.log(categorie
  const categoryButton = categories.map(category => {
    return <button onClick={() => { onClick(category) }} key={category} className={(isSelected === category) ? "selected" : ""}>{category}</button>
  })

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categoryButton}
    </div>
  );
}

export default CategoryFilter;
