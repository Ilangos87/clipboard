function App() {
  return (
    <div
      className="flex items-center justify-center 
    min-h-screen bg-rose-50"
    >
      <div
        className="relative flex flex-col space-y-10
        bg-white shadow-2xl rounded-2xl md:flex-row md:space-y-0
        md:m-0"
      >
        <div className="p-6 md:p-20">
          <h2 className="font-mono mb-5 text-4xl font-bold ">Log In</h2>
          <p className="max-w-sm mb-12 font-sans font-light text-gray-600">
            Log in to your account to upload or download pictures, videos or
            music.
          </p>
          <input
            className="w-full p-6 border border-gray-300 rounded-md placeholder:font-sans
            placeholder:font-light"
            type="text"
            placeholder="Enter your email address"
          />
          <div
            className="flex flex-col items-center justify-between mt-6 space-y-6 
            md:flex-row md:space-y-0"
          >
            <div className="font-thin text-cyan-700">Forgot password</div>
            <button
              className="w-full md:w-auto flex justify-center items-center
              p-6 space-x-4 font-sans font-bold rounded-md shadow-lg px-9 bg-cyan-500
               shadow-cyan-100 hover:bg-opacity-90 hover:shadwow-lg  hover:-translate-y-0.5 duration-150"
            >
              <span className="text-center">Next</span>
              <img className="text-center" src="public/arrow.png" alt="" />
            </button>
          </div>
          <div className="mt-12 border-b border-b-gray-300"></div>
          <p className="py-6 text-sm font-thin text-center text-gray-400">
            or Log in with
          </p>
        </div>
        <img
          className="w-[430px] hidden md:block"
          src="public/logo.jpg"
          alt=""
        />
      </div>
    </div>
  );
}

export default App;
