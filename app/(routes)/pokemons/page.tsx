import Link from "next/link"

const fetchPokemons = async () => {
  const URL = 'https://pokeapi.co/api/v2/pokemon'
  const response = await fetch(URL)
  const data = await response.json()
  return data
}

const PokemonsPage = async () => {
  const pokemonsData = await fetchPokemons()

  return (
    <>
      <h1>PokemonsPage</h1>
      <ul>
        {pokemonsData.results.map(pokemon => {
          return (
            <>
              <Link href = {`/pokemons/${pokemon.name}`} >
              <li key={pokemon.url}>{pokemon.name}</li>
              </Link>
            </>
          )
        })}
      </ul>
    </>
  )
}

export default PokemonsPage