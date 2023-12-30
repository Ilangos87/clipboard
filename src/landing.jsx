function App() {
    return (
      <div
        className="flex flex-col items-center justify-center
     bg-white min-h-screen space-y-10"
      >
        <div className="flex items-center justify-center w-32 h-32 rounded-full
         bg-sky-200 shadow-lg border border-cyan-400 hover:-translate-y-0.5
          transition-all duration-150">
          <img className="w-24 h-24" src="public/company.png" alt="" />
        </div>
        <h2 className="font-bold text-xl">A history of everything you copy</h2>
        <p className="text-center max-w-xs font-thin  text-gray-500">Clipboard allows you to track and organize everything you copy.
          Instantly access your Clipboard on all your devices.
        </p>
        <button className="border border-white-500 bg-green-400 
        text-white shadow-lg shadow-green-600 py-2 px-10 rounded-xl
        hover:-translate-y-0.5 transition duration-150">Download for IOS</button>
        <button className="border border-white-500 bg-blue-600
        text-white shadow-lg shadow-blue-600 py-2 px-10 rounded-xl
        hover:-translate-y-0.5 transition duration-150">Download for MAC</button>
      </div>
    );
  }
  
  export default App;
  