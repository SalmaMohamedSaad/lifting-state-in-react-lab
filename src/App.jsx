import { useState } from 'react'
import IngredientList from './components/IngredientList'
import BurgerStack from './components/BurgerStack'
import './App.css'

export const availableIngredients = [
  { name: 'Kaiser Bun', color: 'saddlebrown' },
  { name: 'Sesame Bun', color: 'sandybrown' },
  { name: 'Gluten Free Bun', color: 'peru' },
  { name: 'Lettuce Wrap', color: 'olivedrab' },
  { name: 'Beef Patty', color: '#3F250B' },
  { name: 'Soy Patty', color: '#3F250B' },
  { name: 'Black Bean Patty', color: '#3F250B' },
  { name: 'Chicken Patty', color: 'burlywood' },
  { name: 'Lettuce', color: 'lawngreen' },
  { name: 'Tomato', color: 'tomato' },
  { name: 'Bacon', color: 'maroon' },
  { name: 'Onion', color: 'lightyellow' },
  { name: 'Cheddar Cheese', color: '#FDE18B' },
  { name: 'Swiss Cheese', color: '#F1E1A8' }
]

const App = () => {
  const [stack, setStack] = useState([])

  const addIngredient = (ingredient) => {
    setStack((stack) => [...stack, ingredient])
  }

  const removeIngredient = (ingredientToRemove) => {
    console.log(ingredientToRemove)
    setStack((stack) =>
      stack.filter((ingredient) => ingredient.name !== ingredientToRemove.name)
    )
    console.log('Stack=========>', stack)
  }

  return (
    <main>
      <h1>Burger Stacker</h1>
      <section>
        <div className="ingredients">
          <IngredientList
            availableIngredients={availableIngredients}
            onAddIngredient={addIngredient}
          />
        </div>
        <div className="burger-stack">
          <BurgerStack
            burgerIngredients={stack}
            onRemoveIngredient={removeIngredient}
          />
        </div>
      </section>
    </main>
  )
}

export default App
