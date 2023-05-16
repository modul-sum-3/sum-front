import { FireIcon } from '@heroicons/react/20/solid';
import { Link } from 'react-router-dom';
import routes from '../data/routes';

const NavButtons = () => {
  return (
    <div className="flex justify-end text-white">
      <Link
        className="flex h-20 w-[200px] items-center justify-center bg-purple-950 px-4 text-xl font-semibold hover:text-hover"
        to={routes.login}
      >
        Login
      </Link>

      <Link
        className="flex h-20 w-[200px] items-center justify-center gap-1 bg-primary px-4 text-xl font-semibold hover:bg-hover"
        to={routes.register}
      >
        Register
        <FireIcon className="h-6 w-6 text-white" />
      </Link>
    </div>
  );
};

export default NavButtons;
