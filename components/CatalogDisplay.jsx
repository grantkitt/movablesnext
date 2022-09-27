import Link from "next/link";
const CatalogDisplay = ({products}) => {
  return (
    <div className="py-5 lg:py-10">
        <h1 className='text-center font-medium lg:font-bold text-3xl lg:text-5xl mb-10'>Catalog</h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 px-8 md:px-20 gap-16 mx-auto mb-20">
            {products?.map((product, index) => {
                return(
                    <Link href={`/product/${product.slug}`} key={index}>
                    <div className='h-80 lg:mb-32'>
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