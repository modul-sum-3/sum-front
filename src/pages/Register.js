import IMask from "imask";

const Register = () => {
  function handlePhone() {
    IMask(document.querySelector("#phonenumber"), {
      mask: "000-000-000",
    });
  }

  return (
    <div class="grid bg-gray-200 h-screen">
      <div class="">
        <a href="/" class="" aria-current="page">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Grey_close_x.svg/1200px-Grey_close_x.svg.png"
            class="mt-2 mx-2 h-6 sm:h-9"
            alt="cross"
          />
        </a>
      </div>
      <div class="flex justify-center">
        <form class="flex flex-col gap-3 w-1/4">
          <div class="flex flex-row gap-2">
            <input
              placeholder="Your name"
              id="name"
              type="text"
              required={true}
              class="block w-full border disabled:cursor-not-allowed disabled:opacity-50 bg-gray-50 border-gray-300 text-gray-900 focus:border-green-400 focus:ring-green-400 rounded-lg p-2.5 text-sm"
            />

            <input
              placeholder="Your surname"
              id="surname"
              type="text"
              required={true}
              class="w-full block border disabled:cursor-not-allowed disabled:opacity-50 bg-gray-50 border-gray-300 text-gray-900 focus:border-green-400 focus:ring-green-400 rounded-lg p-2.5 text-sm"
            />
          </div>
          <div class="flex flex-row gap-2">
            <input
              placeholder="Your email"
              id="email"
              type="email"
              required={true}
              class="block w-full border disabled:cursor-not-allowed disabled:opacity-50 bg-gray-50 border-gray-300 text-gray-900 focus:border-green-400 focus:ring-green-400 rounded-lg p-2.5 text-sm"
            />

            <input
              placeholder="Your phone number"
              id="phonenumber"
              type="tel"
              onChange={handlePhone}
              required={true}
              class="w-full block border disabled:cursor-not-allowed disabled:opacity-50 bg-gray-50 border-gray-300 text-gray-900 focus:border-green-400 focus:ring-green-400 rounded-lg p-2.5 text-sm"
            />
          </div>
          <div class="flex flex-row gap-2">
            <input
              placeholder="Your birthday"
              id="birthdate"
              type="date"
              required={true}
              class="block w-full border disabled:cursor-not-allowed disabled:opacity-50 bg-gray-50 border-gray-300 text-gray-900 focus:border-green-400 focus:ring-green-400 rounded-lg p-2.5 text-sm"
            />

            <input
              placeholder="Your password"
              id="password"
              type="password"
              minLength={8}
              required={true}
              class="w-full block border disabled:cursor-not-allowed disabled:opacity-50 bg-gray-50 border-gray-300 text-gray-900 focus:border-green-400 focus:ring-green-400 rounded-lg p-2.5 text-sm"
            />
          </div>
          <button
            type="submit"
            class="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
          >
            Register
          </button>
          <p className="flex items-center gap-2 list-none">
            <a
              href="/login"
              class="block py-2 pl-3 pr-4 text-black rounded md:bg-transparent md:p-0 hover:text-green-600"
              aria-current="page"
            >
              Already have an account? Log in
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
