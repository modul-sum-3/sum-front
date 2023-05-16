import { Link } from 'react-router-dom';
import routes from '../data/routes';

const NavButtons = () => {
  return (
    <div className="flex text-white">
      <Link
        className="flex h-10 items-center justify-center bg-purple-950 px-4 font-semibold uppercase hover:text-hover"
        to={routes.login}
      >
        Login
      </Link>

      <Link
        className=" justify-centerh-10 flex items-center bg-primary px-4 font-semibold uppercase hover:bg-hover"
        to={routes.register}
      >
        Register
      </Link>
    </div>
  );
};

export default NavButtons;
