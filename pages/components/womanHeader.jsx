const WomanHeader = () => {
  return (
  <div className="w-full bg-womanHeader bg-no-repeat bg-cover" style={{height: '1000px'}}>
      <div className="flex flex-row text-3xl font-semibold p-5 text-white">
         <a href="/catalog" className="ml-auto"><h3 className="ml-auto">Catalog</h3></a>
        <a href="/contact"><h3 className="ml-10">Contact</h3></a>
        <a href="/about"><h3 className="ml-10">About</h3></a>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#ffffff" className="w-8 h-8 ml-10 mr-12 mt-1">
          <path d="M2.25 2.25a.75.75 0 000 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 00-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 000-1.5H5.378A2.25 2.25 0 017.5 15h11.218a.75.75 0 00.674-.421 60.358 60.358 0 002.96-7.228.75.75 0 00-.525-.965A60.864 60.864 0 005.68 4.509l-.232-.867A1.875 1.875 0 003.636 2.25H2.25zM3.75 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM16.5 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z" />
        </svg>
      </div>
      <div className="text-center mt-52">
        <h1 className="font-bold text-7xl text-orange-200 h-14 drop-shadow-xl">Movables</h1>
        <h2 className="font-bold text-6xl text-blue-200 ml-52 text-shadow-2xl drop-shadow-xl">ATX</h2>
        <a href="/catalog">
        <p className="mt-4 p-5 bg-orange-200 rounded-xl w-52 mx-auto text-3xl font-semibold shadow-lg">Shop Now</p>
        </a>
      </div>
      <div className="spacer"></div>
    </div>
    );
}

export default WomanHeader;