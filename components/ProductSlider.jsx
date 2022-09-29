import { Splide, SplideSlide } from 'splide-nextjs/react-splide';
import 'splide-nextjs/splide/dist/css/themes/splide-default.min.css';
import Link from 'next/link';

const ProductSlider = ({products}) => {
  return (
    <div className="px-5 pb-10">
        <h1 className='text-center font-bold text-4xl mb-10'>Continue Shopping!</h1>
        {/* {products.map(product => {
            return (
                <img src={product.imageSrc}/>
            )
        })} */}
        <Splide options={{
            perPage: 3,
        }} className='hidden lg:flex'>
            {products?.map((product, index) => {
                return (
                    <SplideSlide key={index} >
                        <Link href={`/product/${product.slug}`}>
                        <img src={product.imageSrc} alt="carousel item" className='h-80 rounded-2xl border-black border-4 mx-auto'/>
                        </Link>
                    </SplideSlide>
                )
            })}
        </Splide>
        <Splide options={{
            perPage: 1,
        }} className='flex lg:hidden'>
            {products?.map((product, index) => {
                return (
                    <SplideSlide key={index} >
                        <Link href={`/product/${product.slug}`}>
                        <img src={product.imageSrc} alt="carousel item" className='w-full rounded-2xl border-black border-4 mx-auto'/>
                        </Link>
                    </SplideSlide>
                )
            })}
        </Splide>
    </div>
  )
}

export default ProductSlider