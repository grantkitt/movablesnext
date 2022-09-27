import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  
  return (
 
    <div className='bg-white text-black'>
    <Component {...pageProps} />
    </div>
  )
}

export default MyApp
