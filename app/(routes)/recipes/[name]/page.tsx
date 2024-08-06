const fetchRecipe = async (id) => {
  const URL = `https://dummyjson.com/recipes/${id}`
  const response = await fetch(URL)
  const data = response.json()
  return data
}


const RecipePage = async ({params}) => {
  const idRecipe = params.id
  const recipe = await fetchRecipe(idRecipe)
  const nombre = recipe.name
  // const image = `https://cdn.dummyjson.com/recipe-images/${idRecipe}.webp`
  const image = recipe.image
  return (
    <>
    <div>RecipePage {nombre}</div>
    <img src={image}/>
    </>
  )
}

export default RecipePage


