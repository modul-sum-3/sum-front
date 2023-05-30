import MainTemplate from '../templates/MainTemplate';

const Contact = () => {
  return (
    <MainTemplate>
      <div className="mx-10 mt-24 flex items-center justify-center gap-10">
        <div className="flex flex-col justify-center gap-3">
          <span
            href="#"
            className=" mt-4 block max-w-sm rounded-lg border border-gray-200 bg-white p-6 text-center shadow hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
          >
            <h2 className="font-semibold text-primary">Customer Service Department</h2>
            <p className="my-4 ml-1 text-base font-normal text-gray-900">12 345 67 89 </p>
            <p>
              <span className="font-semibold">contact@fitNest.bestrong.pl</span>
            </p>
            <p className="ml-1 mt-4 text-base font-normal text-gray-900">
              We are working since Monday to Sunday, <br /> from 8:00 to 20:00.
            </p>
          </span>
          <span
            href="#"
            className="mt-4 block max-w-sm rounded-lg border border-gray-200 bg-white p-6 text-center shadow hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
          >
            <h2 className="font-semibold text-primary">Contact For Companies</h2>
            <p className="ml-1 mt-4 text-base font-normal text-gray-900">
              Interested companies can send offers to the following e-mail address:{' '}
            </p>
            <p className="mt-2">
              <span className="font-semibold">companies@fitNest.bestrong.pl</span>
            </p>
          </span>
        </div>
        <div className=" mx-14 rounded-lg bg-white p-8">
          <h3 className="mb-8 table-cell h-10 rounded-lg bg-primary p-4 text-center text-white shadow">
            Leave your personal details and we will contact you
          </h3>
          <form className="mt-6">
            <div className="relative z-0 mb-6 w-full">
              <input
                type="email"
                name="floating_email"
                id="floating_email"
                className="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent px-0 py-2.5 text-sm text-gray-900 focus:border-primary focus:outline-none focus:ring-0"
                placeholder=" "
                required
              />
              {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
              <label
                htmlFor="floating_email"
                className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium "
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
                  className="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent px-0 py-2.5 text-sm text-gray-900 focus:border-primary focus:outline-none focus:ring-0"
                  placeholder=" "
                  required
                />
                {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
                <label
                  htmlFor="floating_first_name"
                  className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium"
                >
                  First name
                </label>
              </div>
              <div className="group relative z-0 mb-6 w-full">
                <input
                  type="text"
                  name="floating_last_name"
                  id="floating_last_name"
                  className="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent px-0 py-2.5 text-sm text-gray-900 focus:border-primary focus:outline-none focus:ring-0"
                  placeholder=" "
                  required
                />
                {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
                <label
                  htmlFor="floating_last_name"
                  className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium "
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
                  className="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent px-0 py-2.5 text-sm text-gray-900 focus:border-primary focus:outline-none focus:ring-0"
                  placeholder=" "
                  required
                />
                {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
                <label
                  htmlFor="floating_phone"
                  className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium "
                >
                  Phone number
                </label>
              </div>
              <div className="group relative z-0 mb-6 w-full">
                <input
                  type="text"
                  name="floating_message"
                  id="floating_message"
                  className="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent px-0 py-2.5 text-sm text-gray-900 focus:border-primary focus:outline-none focus:ring-0"
                  placeholder=" "
                  required
                />
                {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
                <label
                  htmlFor="floating_message"
                  className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium "
                >
                  Message
                </label>
              </div>
            </div>
            <button
              id="submitButton"
              type="submit"
              className="w-full rounded-lg bg-primary px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-hover focus:outline-none focus:ring-4 focus:ring-gray-300"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </MainTemplate>
  );
};

export default Contact;
