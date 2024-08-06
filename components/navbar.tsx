import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className='border-b'>
      <div className='mx-auto max-w-7xl'>
        <div className='px-4 sm:px-6 lg:px-8 h-16 flex items-center bg-red-600'>
        <Link href="/">
          <h1 className='font-bold text-xl'> My app</h1>
        </Link>
        <nav className='mx-6 flex items-center space-x-4  lg:space-x-6'>
          <Link href="/hola">Hola</Link>
          <Link href="/perfil">Perfil</Link>
          <Link href="/hola/adios">Adios</Link>
          <Link href="/productos">Productos</Link>
          <Link href="/pokemons">Pokemons</Link>
          <Link href="/recipes">Recetas</Link>
          <Link href="/productsDummyjson">Products Dummyjson</Link>
          <Link href="/countries">Countries</Link>
        </nav>
        </div>
      </div>
    </div> 
  )
}

export default Navbar