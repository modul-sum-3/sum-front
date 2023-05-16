import { Navbar as Nav } from 'flowbite-react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../assets/logo_fit.svg';
import routes from '../../data/routes';
import user from '../../data/store';
import NavButtons from '../NavButtons';
import LogoutButton from './LogoutButton';

const navList = [
  { name: 'Home', link: routes.home },
  { name: 'clubs', link: routes.clubs },
  { name: 'membership', link: routes.membership },
  { name: 'contact', link: routes.contact },
];

const Navbar = () => {
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
    <div className="bg-transparent">
      <Nav fluid rounded className="w-[90vw] max-w-screen-xl bg-white/0">
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
      </Nav>
    </div>
  );
};

export default Navbar;
