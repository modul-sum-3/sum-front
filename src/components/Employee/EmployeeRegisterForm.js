import axios from 'axios';
import IMask from 'imask';
import { useState } from 'react';
import { NotificationManager } from 'react-notifications';
import 'react-notifications/lib/notifications.css';
import { Link } from 'react-router-dom';
import routes from '../../data/routes';

const EmployeeRegisterForm = ({ param }) => {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [birthday, setBirthday] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [password1, setPassword1] = useState('');
  const [password2, setPassword2] = useState('');

  function handlePhone() {
    const phone = document.querySelector('#phonenumber');

    IMask(phone, {
      mask: '000-000-000',
    });

    phone.addEventListener('change', () => {
      setPhoneNumber(phone.value);
    });
  }

  function showPassword() {
    const passwordInput1 = document.querySelector('#password1');
    const passwordInput2 = document.querySelector('#password2');
    if (passwordInput1.type === 'password') {
      passwordInput1.type = 'text';
      passwordInput2.type = 'text';
    } else {
      passwordInput1.type = 'password';
      passwordInput2.type = 'password';
    }
  }

  function isValidEmail(newEmail) {
    return /\S+@\S+\.\S+/.test(newEmail);
  }

  const handleRegister = (e) => {
    e.preventDefault();

    if (!isValidEmail(email)) {
      NotificationManager.error('Invaild email!');
      return;
    }

    if (password1 !== password2) {
      NotificationManager.error('Passwords are not the same!');
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
      .post('', newUser)
      .then(() => {
        NotificationManager.success('Register successful');
      })
      .catch(() => {
        NotificationManager.error('Register unsuccessful');
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
    <div className="flex  justify-center backdrop-blur-sm">
      <form
        className={`flex ${param} flex-col gap-3 max-lg:w-1/2 max-md:w-2/3`}
        onSubmit={handleRegister}
      >
        <div className="flex flex-row gap-2">
          <input
            placeholder="Your name"
            id="name"
            type="text"
            required
            onChange={(event) => setName(event.target.value)}
            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary focus:ring-primary disabled:cursor-not-allowed disabled:opacity-50"
          />

          <input
            placeholder="Your surname"
            id="surname"
            type="text"
            required
            onChange={(event) => setSurname(event.target.value)}
            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary focus:ring-primary disabled:cursor-not-allowed disabled:opacity-50"
          />
        </div>
        <div className="flex flex-row gap-2">
          <input
            placeholder="Your birthday"
            id="birthdate"
            type="text"
            onFocus={(e) => {
              e.target.type = 'date';
            }}
            onBlur={(e) => {
              e.target.type = 'text';
            }}
            required
            onChange={(event) => setBirthday(event.target.value)}
            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary focus:ring-primary disabled:cursor-not-allowed disabled:opacity-50"
          />
          <input
            placeholder="Your phone number"
            id="phonenumber"
            type="tel"
            onChange={handlePhone}
            required
            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary focus:ring-primary disabled:cursor-not-allowed disabled:opacity-50"
          />
        </div>
        <div className="flex justify-center">
          <input
            placeholder="Your email"
            id="email"
            type="email"
            required
            onChange={(event) => setEmail(event.target.value)}
            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary focus:ring-primary disabled:cursor-not-allowed disabled:opacity-50"
          />
        </div>
        <div className="flex flex-row items-center gap-2">
          <input
            placeholder="Your password"
            id="password1"
            type="password"
            minLength={8}
            required
            onChange={(event) => setPassword1(event.target.value)}
            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary focus:ring-primary disabled:cursor-not-allowed disabled:opacity-50"
          />
          <button
            type="button"
            className=" cursor-pointer appearance-none border-none bg-inherit"
            onKeyDown={showPassword}
            onClick={showPassword}
          >
            <img
              src="https://static.thenounproject.com/png/718767-200.png"
              id="showpassword"
              className="h-6 w-10 invert"
              alt="eye"
            />
          </button>
          <input
            placeholder="Confirm password"
            id="password2"
            type="password"
            minLength={8}
            required
            onChange={(event) => setPassword2(event.target.value)}
            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary focus:ring-primary disabled:cursor-not-allowed disabled:opacity-50"
          />
        </div>
        <button
          type="submit"
          className="rounded-lg bg-gradient-to-r from-primary to-green-100 px-5 py-2.5 text-center text-sm font-medium text-white transition-colors hover:bg-gradient-to-br"
        >
          Register
        </button>
        <p className="flex list-none items-center gap-2">
          <Link
            to={routes.login}
            className="block rounded py-2 pl-3 pr-4 text-white hover:text-primary md:bg-transparent md:p-0"
            aria-current="page"
          >
            Already have an account? Log in
          </Link>
        </p>
      </form>
    </div>
  );
};

export default EmployeeRegisterForm;
