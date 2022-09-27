import CatalogBar from '../components/catalogBar';
import CatalogDisplay from '../components/CatalogDisplay'
import { postToShopify } from '../utils/shopify';

export async function getStaticProps() {
  const res = await postToShopify({
    query: `
      query getProductList {
        products(sortKey: PRICE, first: 100, reverse: true) {
          edges {
            node {
              id
              handle
              description
              title
              totalInventory
              variants(first: 5) {
                edges {
                  node {
                    id
                    title
                    quantityAvailable
                    priceV2 {
                      amount
                      currencyCode
                    }
                  }
                }
              }
              priceRange {
                maxVariantPrice {
                  amount
                  currencyCode
                }
                minVariantPrice {
                  amount
                  currencyCode
                }
              }
              images(first: 6) {
                edges {
                  node {
                    src
                    altText
                  }
                }
              }
            }
          }
        }
      }`,
    variables: {}
  });
  // uh
  
   //filter on quantity is over 0

  const products = res.products.edges.map(({node}) => {
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
      products: products || null
    }
  }
}

export default function Catalog({products}) {
  // const [isLoading, setIsLoading] = useState(true)
  // const [prodys, setProdys] = useState(null)
  // useEffect(() => {
  //   async function fetchProducts() {
  //     const res = await fetch('/api/products');

  //     if (!res.ok) {
  //       console.error(res);
  //       return {props: {}}
  //     }
  //     //filter on quantity is over 0

  //     const data = await res.json();

  //     const products = data.data.products.edges.map(({node}) => {
  //       if (node.totalInventory <= 0 ) {
  //         return false;
  //       }
  //       return {
  //         id: node.id,
  //         title: node.title,
  //         description: node.description,
  //         imageSrc: node.images.edges[0].node.src,
  //         imageAlt: node.title,
  //         price: node.variants.edges[0].node.priceV2.amount,
  //         slug: node.handle,
  //       }
  //     }).filter(Boolean)
  //     setProdys(products)
  //     setIsLoading(false)
  //   }
  //   fetchProducts()
  // }, [])
  // if (isLoading) return (
  //   <div>Loading mf</div>
  // )
  return (
    <div>
        <CatalogBar/>
        <CatalogDisplay products={products}/>
    </div>
  )
}
