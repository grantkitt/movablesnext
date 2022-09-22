const ProductBar = () => {
  return (
    <div className='barNshit'>
        <div className="flex flex-row p-6" style={{backgroundColor: '#B6DCFF'}}>
          <a href="/">
            <div className="flex flex-row p-4 bg-white rounded-2xl font-bold ml-24">
                <h2 className="text-4xl" style={{color: '#fdc692'}}>Movables</h2>
                <h3 className="text-4xl" style={{color: '#80c1ff'}}>ATX</h3>
            </div>
            </a>
            <input type="text" placeHolder='search name, type, genre' className='border-none h-8 my-auto w-72 pl-2 rounded-md active:border-none ml-auto mr-24'/>
            <div className="flex flex-row my-auto text-2xl font-bold">
              <a href="/catalog"><h3 className="mr-10">Catalog</h3></a>
                <a href="/contact"><h3 className="mr-10">Contact</h3></a>
                <a href="/about"><h3 className="mr-10">About</h3></a>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#000000" className="w-7 h-7 mt-1 mr-10">
                  <path d="M2.25 2.25a.75.75 0 000 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 00-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 000-1.5H5.378A2.25 2.25 0 017.5 15h11.218a.75.75 0 00.674-.421 60.358 60.358 0 002.96-7.228.75.75 0 00-.525-.965A60.864 60.864 0 005.68 4.509l-.232-.867A1.875 1.875 0 003.636 2.25H2.25zM3.75 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM16.5 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z" />
                </svg>
            </div>
      </div>
    </div>
  )
}

export default ProductBar