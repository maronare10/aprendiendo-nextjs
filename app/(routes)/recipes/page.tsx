import Link from "next/link"

const fetchRecipes = async () => {
  const URL = 'https://dummyjson.com/recipes'
  const response = await fetch(URL)
  const data = await response.json()
  return data
}


const RecipesPage = async () => {
  const recipesData = await fetchRecipes()
  return (
      <ul>
        {recipesData.recipes.map(recipe => {
          return (
          <>
            <Link href = {`/recipes/${recipe.id}`}>
            <li key={recipe.id}>{recipe.name}</li>
            </Link>
          </>
          )
      })}
      </ul>
  )
}

export default RecipesPage