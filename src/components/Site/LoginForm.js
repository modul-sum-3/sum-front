import axios from 'axios';
import { useState } from 'react';
import { NotificationManager } from 'react-notifications';
import 'react-notifications/lib/notifications.css';
import { Link, useNavigate } from 'react-router-dom';
import routes from '../../data/routes';
import user from '../../data/store';

const LoginForm = () => {
  const [login, setEmail] = useState('');
  const [password1, setPassword] = useState('');
  const navigate = useNavigate();
  const setRole = user((state) => state.setRole);
  const setToken = user((state) => state.setToken);
  const setUser = user((state) => state.setUser);
  const setId = user((state) => state.setId);
  const setClub = user((state) => state.setClub);

  function isValidEmail(newEmail) {
    return /\S+@\S+\.\S+/.test(newEmail);
  }

  async function postLogin(newLogin) {
    await axios
      .post('https://springboot-385918.oa.r.appspot.com/api/v1/auth/login', newLogin)
      .then((res) => {
        const result = res.data;
        setToken(result.token);
        axios
          .post(
            'https://springboot-385918.oa.r.appspot.com/api/v1/auth/checktoken',
            {},
            { headers: { Authorization: `Bearer ${result.token}` } },
          )
          .then((res1) => {
            const result1 = res1.data;

            if (result1.role === 'CLIENT') {
              axios
                .get(`https://springboot-385918.oa.r.appspot.com/api/client/${result1.id}`)
                .then((res2) => {
                  setUser(res2.data);
                  setRole(result1.role);
                  setId(result1.id);
                  navigate('/');
                })
                .catch((e) => {
                  NotificationManager.error(`Cannot get user - ${e}`);
                });
            } else if (result1.role === 'EMPLOYEE') {
              axios
                .get(`https://springboot-385918.oa.r.appspot.com/api/employee/${result1.id}`)
                .then((res2) => {
                  setUser(res2.data);
                  setRole(result1.role);
                  setId(result1.id);
                  setClub(res2.data.club);
                  navigate('/employee');
                })
                .catch((e) => {
                  NotificationManager.error(`Cannot get user - ${e}`);
                });

              setRole(result1.role);
              setId(result1.id);

              navigate('/employee');
            } else if (result1.role === 'TRAINER') {
              axios
                .get(`https://springboot-385918.oa.r.appspot.com/api/trainer/${result1.id}`)
                .then((res2) => {
                  setUser(res2.data);
                  setRole(result1.role);
                  setId(result1.id);
                  navigate('/coach');
                })
                .catch((e) => {
                  NotificationManager.error(`Cannot get user - ${e}`);
                });
            }
          })
          .catch(() => {
            NotificationManager.error('Login unsuccessful - role');
          });
      })
      .catch(() => {
        NotificationManager.error('Login unsuccessful - token');
      });
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

    postLogin(newLogin);
  };

  return (
    <div className="flex justify-center">
      <form className="flex flex-col gap-4 max-lg:w-1/3 max-md:w-1/2 " onSubmit={handleLogin}>
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
          className="rounded-lg bg-primary px-5 py-2.5 text-center text-sm font-medium text-white transition-colors hover:bg-hover"
        >
          Log in
        </button>
        <p className="flex list-none items-center gap-2">
          <Link
            to={routes.register}
            className="block rounded py-2 pl-3 pr-4 text-gray-900 hover:text-primary md:bg-transparent md:p-0"
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
