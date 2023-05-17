import { ArrowRightOnRectangleIcon as LogoutIcon } from '@heroicons/react/20/solid';

const NavLogoutButton = ({ handleLogout }) => {
  return (
    <button
      type="button"
      className="flex items-center justify-center rounded-lg bg-orange-600 p-2.5 pr-6 font-semibold uppercase transition duration-200 hover:bg-red-700"
      onClick={handleLogout}
    >
      <LogoutIcon className="flex h-7 w-7 justify-end text-white" />
    </button>
  );
};

export default NavLogoutButton;
