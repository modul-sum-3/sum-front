import { Button, Navbar as Nav } from 'flowbite-react';
import logo from '../assets/logo_fit.svg';

const Navbar = () => {
  return (
    <div className="flex w-full items-center justify-center bg-white">
      <Nav fluid rounded className="w-[90vw] max-w-screen-xl bg-white/0">
        <Nav.Brand href="/">
          <img src={logo} className="mr-3 h-6 sm:h-9" alt="FitNest Logo" />
        </Nav.Brand>

        <Nav.Collapse className="uppercase">
          <Nav.Link href="/" class="font-semibold hover:text-hover">
            Home
          </Nav.Link>
          <Nav.Link href="/clubs" class="font-semibold hover:text-hover">
            Clubs
          </Nav.Link>
          <Nav.Link href="/membership" class="font-semibold hover:text-hover">
            Membership
          </Nav.Link>
          <Nav.Link href="/contact" class="font-semibold hover:text-hover ">
            Contact
          </Nav.Link>
          <Nav.Link href="/client" class="hover:text-hover ">
            Client
          </Nav.Link>
          <Nav.Link href="/employee" class="hover:text-hover ">
            Employee
          </Nav.Link>
          <Nav.Link href="/coach" class="hover:text-hover">
            Coach
          </Nav.Link>
        </Nav.Collapse>

        <div className="flex place-items-center gap-6">
          <Nav.Collapse>
            <Nav.Link href="/login" class="font-semibold hover:text-hover">
              Login
            </Nav.Link>
          </Nav.Collapse>
          <div className="flex">
            <Button href="/register" className="bg-primary font-semibold hover:bg-hover">
              Register
            </Button>
            <Nav.Toggle />
          </div>
        </div>
      </Nav>
    </div>
  );
};

export default Navbar;
