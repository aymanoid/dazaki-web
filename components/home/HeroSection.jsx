const HeroSection = () => {
  return (
    <div className="bg-zinc-900 lg:relative">
      <div className="mx-auto w-full max-w-7xl pt-16 pb-20 text-center lg:py-48 lg:text-left">
        <div className="px-4 sm:px-8 lg:w-1/2 xl:pr-16">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
            <span className="block xl:inline">Yes, you do need</span>{" "}
            <span className="block bg-gradient-to-r from-red-200 to-rose-400 bg-clip-text text-transparent xl:inline">
              custom solutions
            </span>
          </h1>
          <p className="mx-auto mt-3 max-w-md text-lg text-gray-300 sm:text-xl md:mt-5 md:max-w-3xl">
            Dazaki is building custom technologies for content creators,
            businesses, Influencers, and anyone else in need of cool solutions.
          </p>
          <div className="mt-10 sm:flex sm:justify-center lg:justify-start">
            <div className="rounded-md shadow">
              <a
                href="#"
                className="flex w-full items-center justify-center rounded-md bg-gradient-to-r from-purple-500 to-rose-600 px-8 py-3 text-base font-medium text-white md:py-4 md:px-10 md:text-lg"
              >
                Get in Touch
              </a>
            </div>
            <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
              <a
                href="#"
                className="flex w-full items-center justify-center rounded-md bg-white px-8 py-3 text-base font-medium text-rose-600 hover:bg-gray-50 md:py-4 md:px-10 md:text-lg"
              >
                About
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="relative h-64 w-full sm:h-72 md:h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:h-full lg:w-1/2">
        <img
          className="absolute inset-0 h-full w-full object-cover"
          src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          alt=""
        />
      </div>
    </div>
  );
};

export default HeroSection;
