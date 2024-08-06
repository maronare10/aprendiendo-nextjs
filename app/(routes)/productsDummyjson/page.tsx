import Link from "next/link"

const fetchProducts = async () => {
  const URL = 'https://dummyjson.com/products'
  const response = await fetch(URL)
  const data = await response.json()
  return data
}


const ProductsPage = async () => {
  const productsData = await fetchProducts()
  return (
    <>
    <h1>Products Page</h1>
    <ul>{productsData.products.map(product => {
      return (
        
        <Link key = {product.id} href={`/productsDummyjson/${product.id}`}>
          <li >{product.title}</li>
        </Link>
      )
    })}</ul>    
    </>
  )
}

export default ProductsPage