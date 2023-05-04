import Navbar from '../components/Navbar';

const Contact = () => {
  return (
    <div className="flex h-max min-h-screen flex-col bg-gray-200">
      <Navbar />
      <div className="mx-10 mt-32 flex h-full  items-center justify-center">
        <div className="flex flex-col justify-center gap-3">
          <span
            href="#"
            className=" mt-4 block max-w-sm rounded-lg border border-gray-200 bg-white p-6 text-center shadow hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
          >
            <p className="ml-1 text-xl font-bold text-primary dark:text-gray-400">
              Customer Service Department
            </p>
            <p className="ml-1 mt-4 text-base font-normal text-gray-900 dark:text-gray-400">
              12 345 67 89 <br />
              <span className="font-bold">contact@fitNest.bestrong.pl</span>
            </p>
            <p className="ml-1 mt-4 text-base font-normal text-gray-900 dark:text-gray-400">
              We are working since Monday to Sunday, <br /> from 8:00 to 20:00.
            </p>
          </span>
          <span
            href="#"
            className="mt-4 block max-w-sm rounded-lg border border-gray-200 bg-white p-6 text-center shadow hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
          >
            <p className="ml-1 text-xl font-bold text-primary dark:text-gray-400">
              Contact For Companies
            </p>
            <p className="ml-1 mt-4 text-base font-normal text-gray-900 dark:text-gray-400">
              Interested companies can send offers to the following e-mail address: <br />
              <span className="font-bold">companies@fitNest.bestrong.pl</span>
            </p>
          </span>
        </div>
        <div className=" shrink-1 grow-1 mx-14 mt-14 w-1/2 ">
          <p className="mb-8 mt-4  h-10 w-full rounded-lg bg-primary p-2 text-center text-sm text-white shadow-lg shadow-lime-600 dark:text-gray-400">
            Leave your personal details and we will contact you
          </p>
          <form className="">
            <div className=" relative z-0 mb-6 w-full">
              <input
                type="email"
                name="floating_email"
                id="floating_email"
                className="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent px-0 py-2.5 text-sm text-gray-900 focus:border-primary focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-white dark:focus:border-blue-500"
                placeholder=" "
                required
              />
              {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
              <label
                htmlFor="floating_email"
                className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium  dark:text-gray-400 peer-focus:dark:text-blue-500"
              >
                Email address
              </label>
            </div>

            <div className="grid md:grid-cols-2 md:gap-6">
              <div className="group relative z-0 mb-6 w-full">
                <input
                  type="text"
                  name="floating_first_name"
                  id="floating_first_name"
                  className="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent px-0 py-2.5 text-sm text-gray-900 focus:border-primary focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-white dark:focus:border-blue-500"
                  placeholder=" "
                  required
                />
                {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
                <label
                  htmlFor="floating_first_name"
                  className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium dark:text-gray-400 peer-focus:dark:text-blue-500"
                >
                  First name
                </label>
              </div>
              <div className="group relative z-0 mb-6 w-full">
                <input
                  type="text"
                  name="floating_last_name"
                  id="floating_last_name"
                  className="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent px-0 py-2.5 text-sm text-gray-900 focus:border-primary focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-white dark:focus:border-blue-500"
                  placeholder=" "
                  required
                />
                {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
                <label
                  htmlFor="floating_last_name"
                  className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium  dark:text-gray-400 peer-focus:dark:text-blue-500"
                >
                  Last name
                </label>
              </div>
            </div>
            <div className="grid md:grid-cols-2 md:gap-6">
              <div className="group relative z-0 mb-6 w-full">
                <input
                  type="tel"
                  pattern="[0-9]{3}-[0-9]{3}-[0-9]{3}"
                  name="floating_phone"
                  id="floating_phone"
                  className="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent px-0 py-2.5 text-sm text-gray-900 focus:border-primary focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-white dark:focus:border-blue-500"
                  placeholder=" "
                  required
                />
                {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
                <label
                  htmlFor="floating_phone"
                  className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium  dark:text-gray-400 peer-focus:dark:text-blue-500"
                >
                  Phone number
                </label>
              </div>
              <div className="group relative z-0 mb-6 w-full">
                <input
                  type="text"
                  name="floating_message"
                  id="floating_message"
                  className="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent px-0 py-2.5 text-sm text-gray-900 focus:border-primary focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-white dark:focus:border-blue-500"
                  placeholder=" "
                  required
                />
                {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
                <label
                  htmlFor="floating_message"
                  className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium  dark:text-gray-400 peer-focus:dark:text-blue-500"
                >
                  Message
                </label>
              </div>
            </div>
            <button
              id="submitButton"
              type="submit"
              className="w-full rounded-lg bg-gradient-to-r from-primary to-green-100 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gradient-to-br focus:outline-none focus:ring-4 focus:ring-primary"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
