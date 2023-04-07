import { Navbar as Nav } from "flowbite-react";

const Navbar = () => {
  return (
    <Nav fluid={true} rounded={true}>
      <Nav.Brand href="https://flowbite.com/">
        <img
          src="https://flowbite.com/docs/images/logo.svg"
          className="mr-3 h-6 sm:h-9"
          alt="FitNest Logo"
        />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          FitNest
        </span>
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
      <Nav.Collapse>
        <Nav.Link href="/login">Login</Nav.Link>
      </Nav.Collapse>
    </Nav>
  );
};

export default Navbar;
