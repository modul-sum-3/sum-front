const LogoutButton = ({ handleLogout }) => {
  return (
    <button
      type="button"
      className="bg-primary font-semibold hover:bg-hover"
      onClick={handleLogout}
    >
      Logout
    </button>
  );
};

export default LogoutButton;
