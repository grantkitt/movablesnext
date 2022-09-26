import WomanHeader from '../components/womanHeader'
import ItemSlider from '../components/itemSlider'
import DogSlide from '../components/dogSlide'
import EmailSection from '../components/emailSection'
import Footer from '../components/footer'
import { useState, useEffect } from 'react'
// export async function getStaticProps() {
//   const url = new URL(process.env.URL || 'http://localhost:3000')
//   url.pathname = '/api/products';
//   const res = await fetch('http://localhost:3000/api/products');

//   if (!res.ok) {
//     console.error(res);
//     return {props: {}}
//   }
//    //filter on quantity is over 0

//    const data = await res.json();

//   const products = data.data.products.edges.map(({node}) => {
//     if (node.totalInventory <= 0 ) {
//       return false;
//     }
//     return {
//       id: node.id,
//       title: node.title,
//       description: node.description,
//       imageSrc: node.images.edges[0].node.src,
//       imageAlt: node.title,
//       price: node.variants.edges[0].node.priceV2.amount,
//       slug: node.handle,
//     }
//   }).filter(Boolean)

//   return {
//     props: {
//       products
//     }
//   }
// }

export default function Home({}) {
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
      <WomanHeader/>
      <ItemSlider products={prodys} />
      <DogSlide/>
      <EmailSection/>
      <Footer/>
    </div>
    
    )
}


