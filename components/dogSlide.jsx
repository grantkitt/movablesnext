import Link from "next/link";
const DogSlide = () => {
  return (
    <div className="bg-couchDog w-full bg-no-repeat bg-cover bg-center pt-60 pl-32 pb-10 lg:p-40" >
        <div className="bg-orange-200 w-60 lg:w-96 text-center p-5 rounded-xl shadow-2xl border-white border-2">
            <h2 className="text-xl lg:text-3xl font-semibold text-black">
                The best options for your best friends.
            </h2>
            <Link href="/catalog">
            <p className="mt-5 p-5 rounded-xl bg-white shadow-2xl border-4 border-blue-200 font-medium text-black">Shop Today</p>
            </Link>
            
        </div>
        <div className="lg:pb-20 xl:pb-96"></div>
        <div className="lg:pb-10 xl:pb-20"></div>
    </div>
  )
}

export default DogSlide;