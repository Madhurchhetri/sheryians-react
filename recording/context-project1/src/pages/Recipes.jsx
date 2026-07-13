import React from 'react'
import { useContext } from 'react'
import { recipeContext } from '../context/RecipeContext'

const Recipes = () => {
  const { data } = useContext(recipeContext)
  return (
    <div>
      <h1>Recipes</h1>
      <ul>
        {data.map((recipe) => (
          <li key={recipe.id}>
            <h2>{recipe.title}</h2>
            <p>{recipe.description}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Recipes