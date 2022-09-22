import { Splide, SplideSlide } from 'splide-nextjs/react-splide';
import 'splide-nextjs/splide/dist/css/themes/splide-default.min.css';

const ProductSlider = ({products}) => {
  return (
    <div className="pl-8 pr-8 pb-10">
        <h1 className='text-center font-bold text-4xl mb-10'>Continue Shopping!</h1>
        {/* {products.map(product => {
            return (
                <img src={product.imageSrc}/>
            )
        })} */}
        <Splide options={{
            perPage: 3,
        }}>
            {products.map(product => {
                return (
                    <SplideSlide>
                        <a href={`/product/${product.slug}`}>
                        <img src={product.imageSrc} alt="carousel item" className='h-80 rounded-2xl border-black border-4 mx-auto'/>
                        </a>
                    </SplideSlide>
                )
            })}
        </Splide>
    </div>
  )
}

export default ProductSlider