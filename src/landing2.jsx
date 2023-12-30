function App() {
  return (
    <section id="hero">
      <div
        className="max-w-6xl mx-auto text-center 
          border border-cyan-500 mb-12 pt-16 px-10 min-h-screen"
      >
        <img
          className="w-32 h-32 my-10 mx-auto border -bottom-1"
          src="public/company.png"
          alt=""
        />
        <h3
          className="mb-8 text-4xl font-bold text-gray-900  
          border border-red-700 md:text-5xl"
        >
          A history of everything you copy
        </h3>
        <p className="max-w-3xl mx-auto mb-10 text-xl md:text-2xl text-gray-700 border border-emerald-500">
          Clipboard allows you to track and organize everything you copy.
          Instantly access your clipboard on all your devices.
        </p>
        <div
          className="flex flex-col justify-center w-full space-y-6 text-xl
          text-white md:flex-row md:space-y-0 md:space-x-8"
        >
          <div className="px-8 p-4 rounded-full shadow-lg bg-cyan-500 duration-200 hover:opacity-80 border border-red-500">
            Download for IOS
          </div>
          <div className="px-8 p-4 rounded-full shadow-lg bg-cyan-500 duration-200 hover:opacity-80 border border-red-500">
            Download for MAC
          </div>
        </div>
      </div>
    </section>
  );
}

export default App;
