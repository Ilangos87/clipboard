function App() {
  return (
    <section id="hello">
      <div className="min-h-screen text-center">
        <h3
          className="mx-auto font-bold font-serif 
        text-2xl max-w-xs pt-10 mb-5"
        >
          Keep track of your snippets
        </h3>
        <p className="max-w-sm mx-auto mb-6 text-gray-700  font-extralight">
          cliboard instantly stored any item you copy in the cloud, meaning you
          can access your snippets immediately on all your devices. Our Mac and
          iOS apps will help you organize everything.
        </p>
        <div
          className="flex flex-col p-8 md:flex-row md:justify-between
          md:max-w-6xl md:mx-auto"
        >
          <div className="mb-3 md:mb-0 md:mr-5">
            <img
              className="rounded-md shadow-2xl"
              src="public/coffee.jpg"
              alt=""
            />
          </div>
          <div className="flex flex-col space-y-2 md:items-start md:justify-center">
            <h2 className="font-bold">Quick Search</h2>
            <p
              className="font-extralight mb-5 text-gray-600
               max-w-sm mx-auto md:text-left"
            >
              Easily search your snippets by content, category, web addresses,
              application and more.
            </p>
            <h2 className="font-bold">Quick Search</h2>
            <p
              className="font-extralight mb-5 text-gray-600
               max-w-sm mx-auto md:text-left"
            >
              Easily search your snippets by content, category, web addresses,
              application and more.
            </p>
            <h2 className="font-bold">Quick Search</h2>
            <p
              className="font-extralight mb-5 text-gray-600
               max-w-sm mx-auto md:text-left"
            >
              Easily search your snippets by content, category, web addresses,
              application and more.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
export default App;
