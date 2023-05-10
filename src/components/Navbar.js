import { Button, Navbar as Nav } from 'flowbite-react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo_fit.svg';
import routes from '../data/routes';

const Navbar = () => {
  return (
    <div className="flex w-full items-center justify-center bg-white">
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
          <Link to={routes.client}>
            <Nav.Link class="hover:text-hover ">Client</Nav.Link>
          </Link>
          <Link to={routes.employee}>
            <Nav.Link class="hover:text-hover ">Employee</Nav.Link>
          </Link>
          <Link to={routes.coach}>
            <Nav.Link class="hover:text-hover">Coach</Nav.Link>
          </Link>
        </Nav.Collapse>

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
      </Nav>
    </div>
  );
};

export default Navbar;
