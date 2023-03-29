import { useState } from "react";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function isValidEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
  }

  const handleLogin = (e) => {
    e.preventDefault();

    if (!isValidEmail(email)) {
      alert("Invalid email");
      return;
    }
    // There should be a function which hash password
    if (password === null) {
      return;
    }

    //Creating object to pass to databse
    const newLogin = {
      login: email,
      hashed: password,
      hash: "",
    };

    axios
      .post("URL", newLogin)
      .then((res) => {
        alert("Udane logowanie");
      })
      .catch((err) => {
        alert("Logowanie nieudane");
      });

    e.target.reset();
    setEmail(null);
    setPassword(null);
  };

  return (
    <div class="grid gap-0 bg-gray-200 h-screen">
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
        <form className="flex flex-col gap-4 w-1/5 " onSubmit={handleLogin}>
          <div>
            <input
              placeholder="Your email"
              id="email1"
              type="email"
              required={true}
              onChange={(event) => setEmail(event.target.value)}
              class="block w-full border disabled:cursor-not-allowed disabled:opacity-50 bg-gray-50 border-gray-300 text-gray-900 focus:border-green-400 focus:ring-green-400 rounded-lg p-2.5 text-sm"
            />
          </div>
          <div>
            <input
              placeholder="Your password"
              id="password1"
              type="password"
              required={true}
              onChange={(event) => setPassword(event.target.value)}
              class="block w-full border disabled:cursor-not-allowed disabled:opacity-50 bg-gray-50 border-gray-300 text-gray-900 focus:border-green-400 focus:ring-green-400 rounded-lg p-2.5 text-sm"
            />
          </div>
          <button
            type="submit"
            class="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
          >
            Log in
          </button>
          <div className="flex items-center gap-2 list-none">
            <a
              href="/register"
              class="block py-2 pl-3 pr-4 text-black rounded md:bg-transparent md:p-0 hover:text-green-600"
              aria-current="page"
            >
              Don't have an account? Register
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Login;
