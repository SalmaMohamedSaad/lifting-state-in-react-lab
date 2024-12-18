const BurgerStack = ({ burgerIngredients, onRemoveIngredient }) => {
  return (
    <ul>
      {burgerIngredients.map((ingredient) => (
        <li key={ingredient.name} style={{ backgroundColor: ingredient.color }}>
          {ingredient.name}
          <button onClick={() => onRemoveIngredient(ingredient)}>-</button>
        </li>
      ))}
    </ul>
  )
}

export default BurgerStack
