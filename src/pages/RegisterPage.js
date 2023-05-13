import { NotificationContainer } from 'react-notifications';
import { Link } from 'react-router-dom';
import RegisterForm from '../components/Site/RegisterForm';
import routes from '../data/routes';

const Register = () => {
  return (
    // eslint-disable-next-line tailwindcss/no-contradicting-classname
    <div className="grid h-screen bg-gray-500 bg-[url('assets/gym1.jpg')] bg-cover bg-center bg-no-repeat bg-blend-multiply">
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
      <RegisterForm width="w-1/3" invert="invert" display="block" />
    </div>
  );
};

export default Register;
