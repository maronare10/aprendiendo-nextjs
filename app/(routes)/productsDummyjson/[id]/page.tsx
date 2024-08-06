const fetchProduct = async (id) => {
  const URL = `https://dummyjson.com/products/${id}`
  const response = await fetch(URL)
  const data = await response.json()
  return data
} 

const ProductDummyjson = async ({params}) => {
  const idProduct = params.id
  const product = await fetchProduct(idProduct)
  // const image = product.images[0]
  const image  = product.thumbnail
  return (
    <>
    <div>ProductsDummyjson {product.title}</div>
    <img src={image} alt="" />
    </>
  )
}

export default ProductDummyjson