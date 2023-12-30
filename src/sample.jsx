function App() {
  
    return (
      <>
       <div className="flex items-center justify-center min-h-screen">
        <div className="flex flex-col space-y-4 md:space-y-0 md:space-x-4 md:flex-row">
         <button className="flex items-center justify-center py-3 px-5 space-x-3 border-2
         border-gray-300 rounded-lg shadow-sm  hover:shadow-lg
         hover:-translate-y-0.5 transition-all duration-150">
          <img src="public/logo.png" alt="" />
          <span>Add to Card</span>
          </button>   
          <button className="flex items-center justify-center py-3 px-5 space-x-3 border-2
         border-gray-300 rounded-lg shadow-sm hover:bg-opacity-30 hover:shadow-lg
         hover:-translate-y-0.5 transition-all duration-150">
          <img src="public/logo.png" alt="" />
          <span>Add to Card</span>
          </button>         
        </div>
       </div>
      </>
    )
  }
  
  export default App
  