const Jumbotron = () => {
  return (
    // eslint-disable-next-line tailwindcss/no-contradicting-classname
    <section className="h-full bg-gray-500 bg-[url('assets/jumbo_bg.jpg')] bg-center bg-no-repeat bg-blend-multiply">
      {' '}
      <div className="m-auto h-full max-w-screen-xl px-4 py-24 text-center lg:py-56">
        <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-white md:text-5xl lg:text-6xl">
          Join us!
        </h1>
        <p className="mb-8 text-lg font-normal text-gray-300 sm:px-16 lg:px-48 lg:text-xl">
          Check out our offer and find something you enjoy.
        </p>
        <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-x-4 sm:space-y-0">
          <a
            href="/membership"
            className="inline-flex items-center justify-center rounded-lg bg-primary px-5 py-3 text-center text-base font-medium text-white hover:bg-green-100 focus:ring-4"
          >
            Check out our offer
            <svg
              aria-hidden="true"
              className="-mr-1 ml-2 h-4 w-4"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </a>
          <a
            href="/clubs"
            className="inline-flex items-center justify-center rounded-lg border border-white px-5 py-3 text-center text-base font-medium text-white hover:bg-gray-100 hover:text-gray-900 focus:ring-4 focus:ring-gray-400"
          >
            Our clubs
          </a>
        </div>
      </div>
    </section>
  );
};

export default Jumbotron;
