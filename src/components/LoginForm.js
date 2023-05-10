import axios from 'axios';
import { useState } from 'react';
import { NotificationManager } from 'react-notifications';
import 'react-notifications/lib/notifications.css';
import { Link } from 'react-router-dom';
import routes from '../data/routes';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function isValidEmail(newEmail) {
    return /\S+@\S+\.\S+/.test(newEmail);
  }

  const handleLogin = (e) => {
    e.preventDefault();

    if (!isValidEmail(email)) {
      NotificationManager.error('Invalid email');
      return;
    }
    // There should be a function which hash password
    if (password === null) {
      return;
    }

    // Creating object to pass to databse
    const newLogin = {
      login: email,
      hashed: password,
      hash: '',
    };

    axios
      .post('URL', newLogin)
      .then(() => {
        NotificationManager.success('Login successful');
      })
      .catch(() => {
        NotificationManager.error('Login unsuccessful');
      });

    e.target.reset();
    setEmail(null);
    setPassword(null);
  };

  return (
    <div className="flex justify-center backdrop-blur-sm">
      <form className="flex w-1/4 flex-col gap-4 max-lg:w-1/3 max-md:w-1/2 " onSubmit={handleLogin}>
        <input
          placeholder="Your email"
          id="email1"
          type="email"
          required
          onChange={(event) => setEmail(event.target.value)}
          className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary focus:ring-primary disabled:cursor-not-allowed disabled:opacity-50"
        />

        <input
          placeholder="Your password"
          id="password1"
          type="password"
          required
          onChange={(event) => setPassword(event.target.value)}
          className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary focus:ring-primary disabled:cursor-not-allowed disabled:opacity-50"
        />

        <button
          type="submit"
          className="rounded-lg bg-primary px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-hover focus:outline-none focus:ring-4 focus:ring-green-300 "
        >
          Log in
        </button>
        <p className="flex list-none items-center gap-2">
          <Link
            to={routes.register}
            className="block rounded py-2 pl-3 pr-4 text-white hover:text-primary md:bg-transparent md:p-0"
            aria-current="page"
          >
            Don't have an account? Register
          </Link>
        </p>
      </form>
    </div>
  );
};
export default LoginForm;
