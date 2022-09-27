const types = [
    {   
        type: "Shop Couches & Chairs",
        image: "https://secure.img1-fg.wfcdn.com/im/49104764/resize-h445%5Ecompr-r85/4426/44260303/Anamaria+30.7%2527%2527+Wide+Tufted+Velvet+Wingback+Chair.jpg"
    },
    {   
        type: "Shop Cabinets & Tables",
        image: "https://secure.img1-fg.wfcdn.com/im/36778985/resize-h445%5Ecompr-r85/1166/116616677/Executive+Desk.jpg"
    },
    {   
        type: "Shop Home Decor",
        image: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/edc090120peart-005-1595519364.jpg?crop=1xw:1xh;center,top&resize=980:*"
    },
]

const Footer = () => {
  return (
    <div className="bg-orange-200 pb-16">
        <div className="flex flex-col lg:flex-row lg:px-32 py-12">
        {types.map((type, index) => {
            return (
                <div className="w-96 mx-auto text-black" key={index}>
                    <h4 className="text-center text-xl lg:text-2xl font-semibold lg:h-12 h-8 lg:mb-5">{type.type}</h4>
                    <img src={type.image} alt={type.type} className='rounded-xl shadow-2xl h-52 mx-auto mb-10 lg:h-60 xl:h-96' />
                </div>
            );
        })}
        </div>
        <div className="flex flex-row text-center">
            <h2 className="text-3xl font-semibold ml-auto text-black">Contact</h2>
            <h2 className="text-3xl font-semibold mx-10 lg:mx-20 text-black">Catalog</h2>
            <h2 className="text-3xl font-semibold mr-auto text-black">About</h2>
        </div>
        <p className="text-center text-gray-600 text-lg mt-5">Copyright MovablesATX. All rights reserved.</p>
    </div>
  )
}

export default Footer;