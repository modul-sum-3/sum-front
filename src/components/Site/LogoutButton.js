const LogoutButton = ({ handleLogout }) => {
  return (
    <div className="flex justify-end text-white">
      <button
        type="button"
        className="flex h-20 items-center justify-center bg-primary px-4 font-semibold uppercase hover:bg-hover"
        onClick={handleLogout}
      >
        Logout
      </button>
    </div>
  );
};

export default LogoutButton;
