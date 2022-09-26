// import { useEffect } from "react";
import ProductBar from "../../components/productBar";
import ProductDisplay from "../../components/productDisplay";
import ProductSlider from "../../components/ProductSlider"
import { postToShopify } from "../../utils/shopify";
export async function getStaticPaths() {
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
   return {
      paths: res.products.edges.map(({node}) => `/product/${node.handle}`),
      fallback: true,
   }
}

export async function getStaticProps(...args) {

  
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


   //filter on quantity is over 0


  const product = res.products.edges
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

  const products = res.products.edges
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
      product: product || null,
      products: products || null
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
  
  
  