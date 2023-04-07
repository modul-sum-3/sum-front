import { Button, Navbar as Nav } from "flowbite-react";
import logo from "../assets/logo_fit.svg";

const Navbar = () => {
  return (
    <Nav fluid={true} rounded={true}>
      <Nav.Brand href="/">
        <img src={logo} className="mr-3 h-6 sm:h-9" alt="FitNest Logo" />
      </Nav.Brand>

      <Nav.Collapse>
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="/club">Club</Nav.Link>
        <Nav.Link href="/pass">Pass</Nav.Link>
        <Nav.Link href="/contact">Contact</Nav.Link>
        <Nav.Link href="/client">Client</Nav.Link>
        <Nav.Link href="/employee">Employee</Nav.Link>
        <Nav.Link href="/coach">Coach</Nav.Link>
      </Nav.Collapse>

      <div className="flex gap-6 place-items-center">
        <Nav.Collapse>
          <Nav.Link href="/login">Login</Nav.Link>
        </Nav.Collapse>
        <div className="flex">
          <Button href="/register" className="bg-primary md">
            Register
          </Button>
          <Nav.Toggle />
        </div>
      </div>
    </Nav>
  );
};

export default Navbar;
