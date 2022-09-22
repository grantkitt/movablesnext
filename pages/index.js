import WomanHeader from './components/womanHeader'
import ItemSlider from './components/itemSlider'
import DogSlide from './components/dogSlide'
import EmailSection from './components/emailSection'
import Footer from './components/footer'
export async function getStaticProps() {
  const url = new URL(process.env.URL || 'http://localhost:3000')
  url.pathname = '/api/products'
  const res = await fetch(url);

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

  return {
    props: {
      products
    }
  }
}

export default function Home({products}) {
  return (
    <div>
       <WomanHeader/>
       <ItemSlider products={products}/>
       <DogSlide/>
       <EmailSection/>
       <Footer/>
    </div>
   
  )
}


