import Link from "next/link";
const CatalogBar = () => {
  return (
    <div className='barNshit'>
        <div className="flex flex-row p-6" style={{backgroundColor: '#B6DCFF'}}>
          <Link href="/">
            <div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 lg:hidden mr-5 cursor-pointer">
              <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
              <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
            </svg>

            <div className="hidden lg:flex lg:flex-row p-4 bg-white rounded-2xl font-bold lg:ml-5 xl:ml-24 cursor-pointer">
                <h2 className="text-4xl" style={{color: '#fdc692'}}>Movables</h2>
                <h3 className="text-4xl" style={{color: '#80c1ff'}}>ATX</h3>
            </div>
            </div>
            </Link>
            
            <input type="text" placeholder='search name, type, genre' className='border-none h-8 my-auto w-72 pl-2 rounded-md active:border-none ml-2 xl:ml-auto mr-5 bg-white'/>
            <div className="lg:flex lg:flex-row my-auto text-2xl font-bold hidden">
              <Link href="/catalog"><h3 className="mr-10">Catalog</h3></Link>
                <Link href="/contact"><h3 className="mr-10">Contact</h3></Link>
                <Link href="/about"><h3 className="mr-10">About</h3></Link>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#000000" className="w-7 h-7 mt-1 mr-10">
                  <path d="M2.25 2.25a.75.75 0 000 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 00-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 000-1.5H5.378A2.25 2.25 0 017.5 15h11.218a.75.75 0 00.674-.421 60.358 60.358 0 002.96-7.228.75.75 0 00-.525-.965A60.864 60.864 0 005.68 4.509l-.232-.867A1.875 1.875 0 003.636 2.25H2.25zM3.75 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM16.5 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z" />
                </svg>
            </div>
      </div>
    </div>
  )
}

export default CatalogBar