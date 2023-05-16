import { Button, Navbar as Nav } from 'flowbite-react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../assets/logo_fit.svg';
import routes from '../../data/routes';
import user from '../../data/store';

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
    <div className="w-full bg-transparent">
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

        {role === '' ? (
          <div className="flex place-items-center gap-6">
            <Nav.Collapse>
              <Link to={routes.login}>
                <Nav.Link class="font-semibold hover:text-hover">Login</Nav.Link>
              </Link>
            </Nav.Collapse>
            <div className="flex">
              <Link to={routes.register}>
                <Button className="bg-primary font-semibold hover:bg-hover">Register</Button>
              </Link>
              <Nav.Toggle />
            </div>
          </div>
        ) : (
          <Button className="bg-primary font-semibold hover:bg-hover" onClick={handleLogout}>
            Logout
          </Button>
        )}
      </Nav>
    </div>
  );
};

export default Navbar;
