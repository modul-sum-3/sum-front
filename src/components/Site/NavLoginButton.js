import { ArrowLeftOnRectangleIcon as LoginIcon } from '@heroicons/react/20/solid';
import { NavLink } from 'react-router-dom';

const NavLoginButton = ({ link }) => {
  return (
    <NavLink
      className="flex items-center justify-center gap-2 self-center rounded-xl bg-primary px-4 py-2.5 font-semibold transition duration-200 hover:bg-hover"
      to={link}
    >
      <p className="font-semibold text-white">Sign in</p>
      <LoginIcon className="flex h-7 w-7 justify-end text-white" />
    </NavLink>
  );
};

export default NavLoginButton;
