import { ArrowRightOnRectangleIcon as LogoutIcon } from '@heroicons/react/20/solid';

const NavLogoutButton = ({ handleLogout }) => {
  return (
    <button
      type="button"
      className="flex items-center justify-center rounded-2xl bg-orange-600 p-2.5 pr-6 font-semibold uppercase transition duration-300 hover:scale-105 hover:bg-orange-700 hover:shadow-2xl"
      onClick={handleLogout}
    >
      <LogoutIcon className="flex h-7 w-7 justify-end text-white" />
    </button>
  );
};

export default NavLogoutButton;
