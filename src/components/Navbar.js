import { Button, Navbar as Nav } from "flowbite-react";
import logo from "../assets/logo_fit.svg";

const Navbar = () => {
  return (
    <Nav fluid={true} rounded={true}>
      <Nav.Brand href="/">
        <img src={logo} className="mr-3 h-6 sm:h-9" alt="FitNest Logo" />
      </Nav.Brand>

      <Nav.Collapse>
        <Nav.Link href="/" class="hover:text-green-100">
          Home
        </Nav.Link>
        <Nav.Link href="/club" class="hover:text-green-100">
          Club
        </Nav.Link>
        <Nav.Link href="/pass" class="hover:text-green-100">
          Pass
        </Nav.Link>
        <Nav.Link href="/contact" class="hover:text-green-100">
          Contact
        </Nav.Link>
        <Nav.Link href="/client" class="hover:text-green-100">
          Client
        </Nav.Link>
        <Nav.Link href="/employee" class="hover:text-green-100">
          Employee
        </Nav.Link>
        <Nav.Link href="/coach" class="hover:text-green-100">
          Coach
        </Nav.Link>
      </Nav.Collapse>

      <div className="flex place-items-center gap-6">
        <Nav.Collapse>
          <Nav.Link href="/login" class="hover:text-green-100">
            Login
          </Nav.Link>
        </Nav.Collapse>
        <div className="flex">
          <Button href="/register" className="md bg-primary hover:bg-green-100">
            Register
          </Button>
          <Nav.Toggle />
        </div>
      </div>
    </Nav>
  );
};

export default Navbar;
