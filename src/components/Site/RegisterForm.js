import axios from 'axios';
import IMask from 'imask';
import { useState } from 'react';
import { NotificationManager } from 'react-notifications';
import 'react-notifications/lib/notifications.css';
import { Link } from 'react-router-dom';
import routes from '../../data/routes';

const RegisterForm = ({ width, invert, display }) => {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [birthday, setBirthday] = useState('');
  const [phoneNumber1, setPhoneNumber] = useState('');
  const [email1, setEmail] = useState('');
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

    if (!isValidEmail(email1)) {
      NotificationManager.error('Invaild email!');
      return;
    }

    if (password1 !== password2) {
      NotificationManager.error('Passwords are not the same!');
      return;
    }

    const newUser = {
      client: {
        first_name: name,
        last_name: surname,
        gender: 'OTHER',
        date_of_birth: birthday,
        // phoneNumber: phoneNumber1,
        email: email1,
        balance: 0,
      },
      password: password1,
    };

    axios
      .post('https://springboot-385918.oa.r.appspot.com/api/v1/auth/register', newUser)
      .then(() => {
        NotificationManager.success('Register successful');
      })
      .catch((err) => {
        NotificationManager.error(`Register unsuccessful ${err}`);
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
    <div className="flex justify-center">
      <form
        className={`flex ${width} flex-col gap-3 max-lg:w-1/2 max-md:w-2/3`}
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
              className={`h-6 w-10 ${invert}`}
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
          className="rounded-lg bg-primary px-5 py-2.5 text-center text-sm font-medium text-white transition-colors hover:bg-hover"
        >
          Register
        </button>
        <p className="flex list-none items-center gap-2">
          <Link
            to={routes.login}
            className={` ${display} text-gray-900 hover:text-primary`}
            aria-current="page"
          >
            Already have an account? Log in
          </Link>
        </p>
      </form>
    </div>
  );
};

export default RegisterForm;
