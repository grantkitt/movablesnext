const EmailSection = () => {
  return (
    <div className="bg-blue-200 text-center p-20">
        <h1 className="text-3xl font-semibold leading-10">Get in the loop.</h1>
        <h2 className="text-2xl font-medium leading-10">Sign up for the newsletter so you are the first to hear about new releases.</h2>
        <form action="Submit">
            <input type="email" input='email' placeholder='enter email' className="w-96 h-10 text-xl bg-transparent text-center focus:border-transparent focus:ring-0 border:transparent"/>
        </form>
        <div className="h-1 w-96 bg-black mx-auto"></div>
        <h3 className="text-2xl p-5 bg-blue-200 shadow-2xl font-semibold w-60 rounded-xl mx-auto mt-5 cursor-pointer">enter</h3>
    </div>
  )
}

export default EmailSection;