import Link from "next/link";
const CatalogDisplay = ({products}) => {
  return (
    <div className="py-10">
        <h1 className='text-center font-bold text-5xl mb-10'>Catalog</h1>
        <div className="grid grid-cols-3 w-2/3 gap-16 mx-auto mb-20">
            {products.map((product, index) => {
                return(
                    <Link href={`/product/${product.slug}`} key={index}>
                    <div className='h-80'>
                        <img src={product.imageSrc} alt="one of the many images" className='border-4 border-black rounded-xl shadow-2xl'/>
                        <h3 className='text-3xl text-medium mt-2'>{product.title}</h3>
                        <h5 className='text-xl'>${product.price}</h5>
                    </div>
                    </Link>
                )
            })}
        </div>
    </div>
  )
}

export default CatalogDisplay;