import clsx from 'clsx';
import { NavLink, useNavigate } from 'react-router-dom';
import routes from '../../data/routes';
import user from '../../data/store';
import NavLoginButton from './NavLoginButton';
import NavLogoutButton from './NavLogoutButton';

const navList = [
  { name: 'Home', link: routes.home },
  { name: 'Clubs', link: routes.clubs },
  { name: 'Membership', link: routes.membership },
  { name: 'Contact', link: routes.contact },
];

const Navbar = ({ color }) => {
  const role = user((state) => state.role);
  const setRole = user((state) => state.setRole);
  const setToken = user((state) => state.setToken);
  const navigate = useNavigate();

  const handleLogout = () => {
    setRole('');
    setToken('');
    navigate('/');
  };

  return (
    <div className="flex flex-col gap-4 self-end bg-transparent text-xl">
      <div className="mr-12 flex gap-20 p-4 font-semibold">
        {navList.map(({ name, link }) => (
          <NavLink
            className={({ isActive }) =>
              clsx(
                'group flex items-center gap-3 rounded-2xl p-2.5 font-semibold transition duration-300 hover:scale-105',
                isActive
                  ? `text-${color} shadow-zinc-900/1 underline underline-offset-8 shadow-2xl`
                  : ` text-${color} hover:bg-white/20 hover:shadow-2xl hover:shadow-zinc-900/10`,
              )
            }
            key={name}
            to={link}
          >
            {name}
          </NavLink>
        ))}
        {role === 'CLIENT' ? (
          <NavLink
            className={({ isActive }) =>
              clsx(
                'group flex items-center gap-3 rounded-2xl p-2.5 font-semibold transition duration-300 hover:scale-105',
                isActive
                  ? `text-${color} underline underline-offset-8 shadow-2xl shadow-zinc-900/10`
                  : ` text-${color} hover:bg-white/20 hover:shadow-2xl hover:shadow-zinc-900/10`,
              )
            }
            to={routes.client}
          >
            Client
          </NavLink>
        ) : null}
        {role === '' ? (
          <NavLoginButton link={routes.login} />
        ) : (
          <NavLogoutButton handleLogout={handleLogout} />
        )}
      </div>

      {/* <Nav fluid rounded className="w-[90vw] max-w-screen-xl bg-white/0">
        <Nav.Brand>
          <Link to={routes.home}>
            <img src={logo} className="mr-3 h-6 sm:h-9" alt="FitNest Logo" />
          </Link>
        </Nav.Brand>
        <Nav.Collapse className="uppercase">
          <Link to={routes.home}>
            <Nav.Link class="font-semibold hover:text-hover">Home</Nav.Link>
          </Link>
          <Link to={routes.clubs}>
            <Nav.Link class="font-semibold hover:text-hover">Clubs</Nav.Link>
          </Link>
          <Link to={routes.membership}>
            <Nav.Link class="font-semibold hover:text-hover">Membership</Nav.Link>
          </Link>
          <Link to={routes.contact}>
            <Nav.Link class="font-semibold hover:text-hover ">Contact</Nav.Link>
          </Link>
          {role === 'CLIENT' ? (
            <Link to={routes.client}>
              <Nav.Link class="hover:text-hover ">Client</Nav.Link>
            </Link>
          ) : null}
        </Nav.Collapse>

        {role === '' ? <NavButtons /> : <LogoutButton handleLogout={handleLogout} />}
      </Nav> */}
    </div>
  );
};

export default Navbar;
