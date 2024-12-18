import { useState } from 'react'

const IngredientList = ({ availableIngredients, onAddIngredient }) => {
  return (
    <ul>
      {availableIngredients.map((ingredient) => (
        <li key={ingredient.name} style={{ backgroundColor: ingredient.color }}>
          {ingredient.name}
          <button onClick={() => onAddIngredient(ingredient)}>+</button>
        </li>
      ))}
    </ul>
  )
}

export default IngredientList
