import { useState } from "react";
const ProductDisplay = ({product}) => {
    const [theImg, setImg] = useState(product?.imageSrcs[0]?.image);
    const change = (e, item) => {
        setImg(item);
    }
  return (
    <div className="holder p-10 flex flex-row">
        <div className="flex flex-col mr-10 w-52">
        {product?.imageSrcs?.map((image, index) => {
            return (
                <img key={index} src={image.image} className='w-full mb-2 cursor-pointer rounded-2xl mr-0' alt="Vintage Furnature" onClick={e => change(e, image.image)} style={{border: (image.image === theImg) ? 'solid 3px black': 'solid 3px white' }} />
            )
        })}
        </div>
        <div className="blocks">
        <div className="flex flex-row justify-center w-auto">
            <img src={theImg} alt="the selected furnature of choice" className="border-4 border-black rounded-3xl" style={{height: '500px'}}/>
            <div className="pl-8" style={{width: '680px'}}>
                <div className="mb-5 flex" style={{width: '600px'}}>
                    <h1 className="text-center text-black text-bold font-bold text-5xl">{product.title}</h1>
                    <h2 className="text-gray-800 text-3xl font-medium mt-3 ml-auto">${product.price}</h2>
                </div>
                <p className="text-justify font-semibold text-gray-600 text-xl">{product.description}</p>
                <div className="mt-5 text-left">
                    <h3 className='text-red-600 font-semibold ml-16'>1 in stock</h3>
                    <h4 className="p-1 mx-auto text-center border-4 border-black text-xl font-semibold mt-1 cursor-pointer" style={{width: '520px'}}>Add to cart</h4>
                    <h4 className="p-1 text-center mx-auto bg-black text-white text-xl font-semibold mt-2 border-4 border-black cursor-pointer" style={{width: '520px'}}>Buy Now</h4> 
                </div>
            </div>

        </div>
        <div className="mt-16" style={{width: '1400px'}}>
            <div className="mt-10 p-5 h-32 bg-orange-200 rounded-xl" >
            <div className="flex flex-row">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
            <path d="M3.375 4.5C2.339 4.5 1.5 5.34 1.5 6.375V13.5h12V6.375c0-1.036-.84-1.875-1.875-1.875h-8.25zM13.5 15h-12v2.625c0 1.035.84 1.875 1.875 1.875h.375a3 3 0 116 0h3a.75.75 0 00.75-.75V15z" />
            <path d="M8.25 19.5a1.5 1.5 0 10-3 0 1.5 1.5 0 003 0zM15.75 6.75a.75.75 0 00-.75.75v11.25c0 .087.015.17.042.248a3 3 0 015.958.464c.853-.175 1.522-.935 1.464-1.883a18.659 18.659 0 00-3.732-10.104 1.837 1.837 0 00-1.47-.725H15.75z" />
            <path d="M19.5 19.5a1.5 1.5 0 10-3 0 1.5 1.5 0 003 0z" />
            </svg>

                <h4 className="text-2xl font-medium ml-2">Delivery Information</h4>
            </div>
            <p className='font-medium mt-5'>Pickup from the warehouse has no added charge, and will allow you to pickup at anytime within working hours. Delivery is available within 30 miles outside Austin.</p>
            </div>
            <div className="mt-5 p-5 h-32 bg-blue-200 rounded-xl">
            <div className="flex">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
            <path fillRule="evenodd" d="M9.53 2.47a.75.75 0 010 1.06L4.81 8.25H15a6.75 6.75 0 010 13.5h-3a.75.75 0 010-1.5h3a5.25 5.25 0 100-10.5H4.81l4.72 4.72a.75.75 0 11-1.06 1.06l-6-6a.75.75 0 010-1.06l6-6a.75.75 0 011.06 0z" clipRule="evenodd" />
            </svg>

                <h4 className='font-medium text-2xl ml-2'>Return Policy</h4>
            </div>
            <p className="font-medium mt-5">We do not allow returns in any regard. The pictures will show any defects, or issues with the item being sold. Additional information avaiable upon request.</p>
            </div>
        </div>
        </div>
        
    </div>
  )
}

export default ProductDisplay