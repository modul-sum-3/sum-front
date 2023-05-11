import axios from 'axios';
import { useState } from 'react';
import { NotificationManager } from 'react-notifications';
import 'react-notifications/lib/notifications.css';
import { Link, useNavigate } from 'react-router-dom';
import routes from '../data/routes';
import user from '../data/store';

const LoginForm = () => {
  const [login, setEmail] = useState('');
  const [password1, setPassword] = useState('');
  const navigate = useNavigate();

  const setRole = user((state) => state.setRole);
  const token = user((state) => state.token);
  const setToken = user((state) => state.setToken);

  function isValidEmail(newEmail) {
    return /\S+@\S+\.\S+/.test(newEmail);
  }

  const handleLogin = (e) => {
    e.preventDefault();

    if (!isValidEmail(login)) {
      NotificationManager.error('Invalid email');
      return;
    }

    // Creating object to pass to databse
    const newLogin = {
      email: login,
      password: password1,
    };

    axios
      .post('https://springboot-385918.oa.r.appspot.com/api/v1/auth/login', {
        email: login,
        password: password1,
      })
      .then((res) => {
        const result = res.json();
        console.log(result.token);
        setToken(result.token);
      })
      .catch(() => {
        NotificationManager.error('Login unsuccessful');
      });

    axios
      .post('https://springboot-385918.oa.r.appspot.com/api/v1/auth/checktoken', token)
      .then((res) => {
        const result = res.json();
        setRole(result.role);
      })
      .catch(() => {
        NotificationManager.error('Login unsuccessful');
      });

    NotificationManager.success('Login successful');
    navigate('/');
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
