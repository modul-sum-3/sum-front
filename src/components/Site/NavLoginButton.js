import { ArrowLeftOnRectangleIcon as LoginIcon } from '@heroicons/react/20/solid';
import { NavLink } from 'react-router-dom';

const NavLoginButton = ({ link }) => {
  return (
    <NavLink
      className="flex items-center justify-center gap-2 self-center rounded-2xl bg-primary px-4 py-2.5 font-semibold transition duration-300 hover:scale-105 hover:bg-hover hover:shadow-2xl"
      to={link}
    >
      <p className="text-white">Sign in</p>
      <LoginIcon className="flex h-7 w-7 justify-end text-white" />
    </NavLink>
  );
};

export default NavLoginButton;
