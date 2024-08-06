const fetchPokemon = async (name) => {
  const URL = `https://pokeapi.co/api/v2/pokemon/${name}`
  const response = await fetch(URL)
  const data = await response.json()
  return data
  
}

const PokemonIdPage = async({params}) => {
  const nombre = params.nombre
  const pokemon = await fetchPokemon(nombre)
  const id = pokemon.id
  
  const image = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`
  return (
    <>
      <div>Hola {nombre}</div>
      <img src={image} alt="" />
    </>
  )
}

export default PokemonIdPage



