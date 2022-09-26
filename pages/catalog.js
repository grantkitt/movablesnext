import ProductBar from '../components/productBar'
import CatalogDisplay from '../components/CatalogDisplay'
import { useEffect, useState } from 'react'

export default function Catalog({}) {
  const [isLoading, setIsLoading] = useState(true)
  const [prodys, setProdys] = useState(null)
  useEffect(() => {
    async function fetchProducts() {
      const res = await fetch('/api/products');

      if (!res.ok) {
        console.error(res);
        return {props: {}}
      }
      //filter on quantity is over 0

      const data = await res.json();

      const products = data.data.products.edges.map(({node}) => {
        if (node.totalInventory <= 0 ) {
          return false;
        }
        return {
          id: node.id,
          title: node.title,
          description: node.description,
          imageSrc: node.images.edges[0].node.src,
          imageAlt: node.title,
          price: node.variants.edges[0].node.priceV2.amount,
          slug: node.handle,
        }
      }).filter(Boolean)
      setProdys(products)
      setIsLoading(false)
    }
    fetchProducts()
  }, [])
  if (isLoading) return (
    <div>Loading mf</div>
  )
  return (
    <div>
        <ProductBar/>
        <CatalogDisplay products={prodys}/>
    </div>
  )
}
