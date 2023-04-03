import IMask from "imask";
import { useState } from "react";
import axios from "axios";

const Register = () => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [birthday, setBirthday] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");

  function handlePhone() {
    const phone = document.querySelector("#phonenumber");

    IMask(phone, {
      mask: "000-000-000",
    });

    phone.addEventListener("change", (event) => {
      setPhoneNumber(phone.value);
    });
  }

  function showPassword() {
    const passwordInput1 = document.querySelector("#password1");
    const passwordInput2 = document.querySelector("#password2");
    if (passwordInput1.type === "password") {
      passwordInput1.type = "text";
      passwordInput2.type = "text";
    } else {
      passwordInput1.type = "password";
      passwordInput2.type = "password";
    }
  }

  function isValidEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
  }

  const handleRegister = (e) => {
    e.preventDefault();

    if (!isValidEmail(email)) {
      alert("Invaild email!");
      return;
    }

    if (password1 !== password2) {
      alert("Passwords are not the same!");
      console.log(password1);
      console.log(password2);
      return;
    }

    const newUser = {
      newName: name,
      newSurname: surname,
      newBirthday: birthday,
      newPhone: phoneNumber,
      newEmail: email,
      newPassword: password1,
    };

    axios
      .post("", newUser)
      .then((res) => {
        alert("Register successful");
      })
      .catch((err) => {
        alert("Register unsuccessful");
      });

    e.target.reset();
    setName(null);
    setSurname(null);
    setBirthday(null);
    setPhoneNumber(null);
    setEmail(null);
    setPassword1(null);
    setPassword2(null);
  };

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
        <form class="flex flex-col gap-3 w-1/4" onSubmit={handleRegister}>
          <div class="flex flex-row gap-2">
            <input
              placeholder="Your name"
              id="name"
              type="text"
              required={true}
              onChange={(event) => setName(event.target.value)}
              class="block w-full border disabled:cursor-not-allowed disabled:opacity-50 bg-gray-50 border-gray-300 text-gray-900 focus:border-green-400 focus:ring-green-400 rounded-lg p-2.5 text-sm"
            />

            <input
              placeholder="Your surname"
              id="surname"
              type="text"
              required={true}
              onChange={(event) => setSurname(event.target.value)}
              class="w-full block border disabled:cursor-not-allowed disabled:opacity-50 bg-gray-50 border-gray-300 text-gray-900 focus:border-green-400 focus:ring-green-400 rounded-lg p-2.5 text-sm"
            />
          </div>
          <div class="flex flex-row gap-2">
            <input
              placeholder="Your birthday"
              id="birthdate"
              type="text"
              onFocus={(e) => (e.target.type = "date")}
              onBlur={(e) => (e.target.type = "text")}
              required={true}
              onChange={(event) => setBirthday(event.target.value)}
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
          <div class="flex justify-center">
            <input
              placeholder="Your email"
              id="email"
              type="email"
              required={true}
              onChange={(event) => setEmail(event.target.value)}
              class="block w-full border disabled:cursor-not-allowed disabled:opacity-50 bg-gray-50 border-gray-300 text-gray-900 focus:border-green-400 focus:ring-green-400 rounded-lg p-2.5 text-sm"
            />
          </div>
          <div class="flex flex-row gap-2 items-center">
            <input
              placeholder="Your password"
              id="password1"
              type="password"
              minLength={8}
              required={true}
              onChange={(event) => setPassword1(event.target.value)}
              class="w-full block border disabled:cursor-not-allowed disabled:opacity-50 bg-gray-50 border-gray-300 text-gray-900 focus:border-green-400 focus:ring-green-400 rounded-lg p-2.5 text-sm"
            />
            <img
              src="https://static.thenounproject.com/png/718767-200.png"
              id="showpassword"
              onClick={showPassword}
              class="w-6 h-6"
              alt="eye"
            />
            <input
              placeholder="Confirm password"
              id="password2"
              type="password"
              minLength={8}
              required={true}
              onChange={(event) => setPassword2(event.target.value)}
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
