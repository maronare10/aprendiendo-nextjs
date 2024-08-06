import Link from "next/link"

const fetchCountries = async () => {
  const URL = 'https://restcountries.com/v3.1/all?fields=name,flags,capital,population,region'
  const response = await fetch(URL)
  const data = await response.json()
  return data
}

const CountriesPage = async () => {
 const countries = await fetchCountries() 
  return (
    <div className="mx-auto max-w-7xl">
    <div>CountriesPage</div>
    {/* {JSON.stringify(countries)} */}
    <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 rounded-md">{countries.map(countrie => (
     <Link key ={countrie.name.common} href={`/countries/${countrie.name.common}`}>
      <li className="bg-slate-100 shadow-lg min-h-96 h-full">
        <img className= "w-full object-contain rounded-t-md" src= {countrie.flags.png} alt="" />
        <div className="p-6">
        <h1 className= "font-bold text-lg">{countrie.name.common}</h1>
        <h1 className= "text-s">Population: {countrie.population}</h1>
        <h1 className= "text-s">Region: {countrie.region}</h1>
        <h1 className= "text-s">Capital: {countrie.capital}</h1>
        </div>
      </li>

     </Link>
    )
      )}</ul>
    </div>
  )
}

export default CountriesPage