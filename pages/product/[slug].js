import ProductBar from "../components/productBar";
import ProductDisplay from "../components/productDisplay";
import ProductSlider from "../components/ProductSlider"
import handler from "../api/products";
export async function getStaticPaths() {
  const url = new URL(process.env.URL || 'http://localhost:3000')
  const res = await fetch('http://localhost:3000/api/products');
    
    if (!res.ok) {
      console.error(res);
      return {props: {}}
    }
     //filter on quantity is over 0
  // lol
    const data = await res.json();
    console.log(data.data.products.edges[0])
    const paths = data.data.products.edges.map(({node}) => {
     return {params: {slug: node.handle}}
    }) 
    return { 
      paths: paths,
      fallback: false,
    }
}

export async function getStaticProps(...args) {

    const url = new URL(process.env.URL || 'http://localhost:3000')
    const res = await fetch('http://localhost:3000/api/products');
    
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
  
  
  