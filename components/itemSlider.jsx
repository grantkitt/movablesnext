import { Splide, SplideSlide } from 'splide-nextjs/react-splide';
import 'splide-nextjs/splide/dist/css/themes/splide-default.min.css';
import Link from 'next/link';

const ItemSlider = ({products}) => {
  return (
    <div className="bg-blue-200 pt-5 lg:pt-10 ">
        <h1 className='text-3xl lg:text-6xl font-bold mt-2 text-center mb-10'>Timeless, Sexy, Vintage.</h1>
        <Splide options={{
            perPage: 3,
        }}>
            
        {products?.map((product, index) => {
            return (
                <SplideSlide key={index}>
                    <Link href={`/product/${product.slug}`}>
                <img src={product.imageSrc} alt="Vintage Furnature" className='h-24 lg:h-52 xl:h-80 border-black border-4 rounded-xl shadow-2xl mb-10 lg:mb-20 mx-auto' />
                    </Link>
                </SplideSlide>
            )
        })}
        </Splide>
    </div>
  )
}

export default ItemSlider