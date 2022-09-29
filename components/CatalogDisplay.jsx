import Link from "next/link";
import { useState } from "react";
const CatalogDisplay = ({products, search, handleClick}) => {
   
    let prodys = products;
    if (search) {
    prodys = products?.filter(el => {
        let name = el.title
        let name2 = name.toLowerCase()
        return name2.includes(search.toLowerCase())
    })
    }
    let showP = <div className="grid grid-cols-1 lg:grid-cols-3 px-8 md:px-20 gap-16 mx-auto mb-20">
                    {prodys?.map((product, index) => {
                        return(
                            <Link href={`/product/${product.slug}`} key={index}>
                            <div className='h-80 lg:mb-32 text-black cursor-pointer'>
                                <img src={product.imageSrc} alt="one of the many images" className='border-4 border-black rounded-xl shadow-2xl'/>
                                <h3 className='text-3xl text-medium mt-2'>{product.title}</h3>
                                <h5 className='text-xl'>${product.price}</h5>
                            </div>
                            </Link>
                        )
                    })}
                </div>
    if (prodys.length == 0) {
        showP = <div className="w-96 text-center mx-auto">
            <h1 className="text-3xl font-medium mt-32">Your search did not return any options.</h1>
            <h3 onClick={e => handleClick(e)} className="text-purple-600 underline text-2xl cursor-pointer">Click here to show all.</h3>
        </div>
    }

  return (
    <div className="py-5 lg:py-10">
        <h1 className='text-center font-medium lg:font-bold text-3xl lg:text-5xl mb-10'>Catalog</h1>
        {showP}
    </div>
  )
}

export default CatalogDisplay;