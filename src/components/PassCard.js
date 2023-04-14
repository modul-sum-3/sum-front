const PassCard = ({ children, title, price }) => {
  return (
    <div>
      <div className="w-full max-w-sm rounded-lg border border-gray-200 bg-white p-4 shadow dark:border-gray-700 dark:bg-gray-800 sm:p-8">
        <h5 className="mb-4 text-xl font-medium text-gray-500 dark:text-gray-400">
          {title}
        </h5>
        <div className="flex items-baseline text-gray-900 dark:text-white">
          <span className="text-3xl font-semibold">$</span>
          <span className="text-5xl font-extrabold tracking-tight">
            {price}
          </span>
          <span className="ml-1 text-xl font-normal text-gray-500 dark:text-gray-400">
            /month
          </span>
        </div>

        <ul role="list" className="my-7 space-y-5">
          {children}
        </ul>

        <button
          type="button"
          className="inline-flex w-full justify-center rounded-lg bg-primary px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-green-100 focus:outline-none focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900"
        >
          Choose plan
        </button>
      </div>
    </div>
  );
};

export default PassCard;
