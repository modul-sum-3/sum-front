import { NotificationContainer } from 'react-notifications';
import { Link } from 'react-router-dom';
import LoginForm from '../components/Site/LoginForm';
import routes from '../data/routes';

const Login = () => {
  return (
    // eslint-disable-next-line tailwindcss/no-contradicting-classname
    <div className="grid h-screen gap-0 bg-gray-500 bg-[url('assets/gym.jpg')] bg-cover bg-center bg-no-repeat bg-blend-multiply ">
      <div className="backdrop-blur-sm">
        <Link to={routes.home} className="" aria-current="page">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Grey_close_x.svg/1200px-Grey_close_x.svg.png"
            className="mx-2 mt-2 h-6 sm:h-9"
            alt="cross"
          />
        </Link>
        <NotificationContainer />
      </div>
      <LoginForm />
    </div>
  );
};
export default Login;
