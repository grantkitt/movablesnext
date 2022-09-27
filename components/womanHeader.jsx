import Link from "next/link";
const WomanHeader = () => {
  return (
  <div className="w-full bg-womanHeader bg-no-repeat bg-cover bg-center" >
      <div className="flex flex-row lg:text-3xl text-xl font-semibold p-5 text-white">
        <Link href='/catalog'><h3 className="ml-auto cursor-pointer">Catalog</h3></Link>
        <Link href="/contact"><h3 className="ml-10 cursor-pointer">Contact</h3></Link>
        <Link href="/about"><h3 className="ml-10 cursor-pointer">About</h3></Link>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#ffffff" className="lg:w-8 lg:h-8 h-6 w-6 ml-10 mr-auto lg:mr-12  mt-1 cursor-pointer">
          <path d="M2.25 2.25a.75.75 0 000 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 00-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 000-1.5H5.378A2.25 2.25 0 017.5 15h11.218a.75.75 0 00.674-.421 60.358 60.358 0 002.96-7.228.75.75 0 00-.525-.965A60.864 60.864 0 005.68 4.509l-.232-.867A1.875 1.875 0 003.636 2.25H2.25zM3.75 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM16.5 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z" />
        </svg>
      </div>
      <div className="text-center mt-10 lg:mt-52">
        <h1 className="font-bold text-7xl text-orange-200 h-14 drop-shadow-xl">Movables</h1>
        <h2 className="font-bold text-6xl text-blue-200 ml-52 text-shadow-2xl drop-shadow-xl">ATX</h2>
        <Link href="/catalog">
        <p className="mt-4 p-5 bg-orange-200 rounded-xl w-52 mx-auto text-3xl font-semibold shadow-lg cursor-pointer">Shop Now</p>
        </Link>
      </div>
      <div className="pb-14 lg:pb-60 xl:pb-96"></div>
    </div>
    );
}

export default WomanHeader;