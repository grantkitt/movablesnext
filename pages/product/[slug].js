import ProductBar from "../components/productBar";
import ProductDisplay from "../components/productDisplay";
import ProductSlider from "../components/ProductSlider"
export async function getStaticPaths() {
  const url = new URL(process.env.URL || 'http://localhost:3000')
  url.pathname = '/api/products'
  const res = await fetch(url);
    
    if (!res.ok) {
      console.error(res);
      return {props: {}}
    }
     //filter on quantity is over 0
  
     const data = await res.json();

     return {
        paths: data.data.products.edges.map(({node}) => `/product/${node.handle}`),
        fallback: false,
     }
}

export async function getStaticProps(...args) {

    const url = new URL(process.env.URL || 'http://localhost:3000')
    url.pathname = '/api/products'
    const res = await fetch(url);
    
    if (!res.ok) {
      console.error(res);
      return {props: {}}
    }
     //filter on quantity is over 0
  
     const data = await res.json();
  
    const product = data.data.products.edges
    .map(({node}) => {
      if (node.totalInventory <= 0 ) {
        return false;
      }
      return {
        id: node.id,
        title: node.title,
        description: node.description,
        imageSrcs: node.images.edges.map(({node}) => {
          return {
            image: node.src
          }
        }),
        imageAlt: node.title,
        price: node.variants.edges[0].node.priceV2.amount,
        slug: node.handle,
      }
    }).find(({slug}) => slug === args[0].params.slug);

    const products = data.data.products.edges
    .map(({node}) => {
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
  
    return {
      props: {
        product,
        products
      }
    }
  }
  export default function ProductPage({product, products}) {
    return (
      <div>
        
         <ProductBar/>
         <ProductDisplay product={product}/>
         <ProductSlider products={products}/>

      </div>
     
    )
  }
  
  
  