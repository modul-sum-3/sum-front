import { FireIcon } from '@heroicons/react/20/solid';
import { Link } from 'react-router-dom';
import routes from '../data/routes';

const NavButtons = () => {
  return (
    <div className="flex justify-end text-white">
      <Link
        className="clip-left absolute right-44 top-0 flex w-[220px] items-center justify-center bg-fuchsia-950 p-6 text-xl font-semibold transition hover:bg-purple-950 "
        to={routes.login}
      >
        Login
      </Link>

      <Link
        className="clip-right flex w-[200px] items-center justify-center gap-1 bg-primary p-6 text-xl font-semibold transition hover:bg-hover"
        to={routes.register}
      >
        Register
        <FireIcon className="h-6 w-6 text-white" />
      </Link>
    </div>
  );
};

export default NavButtons;
