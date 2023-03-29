import { Flowbite } from "flowbite-react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import routes from "../data/routes";
import Home from "./Home";
import Club from "./Club";
import Pass from "./Pass";
import Contact from "./Contact";
import Login from "./Login";
import Employee from "./Employee";
import Coach from "./Coach";
import Client from "./Client";
import Register from "./Register";

function App() {
  return (
    <div className="App">
      {/* //* There will be authorization and role condition */}
      <Flowbite>
        <BrowserRouter>
          <Routes>
            <Route path={routes.home} element={<Home />} />
            <Route path={routes.club} element={<Club />} />
            <Route path={routes.pass} element={<Pass />} />
            <Route path={routes.contact} element={<Contact />} />
            <Route path={routes.login} element={<Login />} />
            <Route path={routes.register} element={<Register />} />
            {/* //* Those routes will be moved but for now we need to have access to them */}
            <Route path={routes.client} element={<Client />} />
            <Route path={routes.employee} element={<Employee />} />
            <Route path={routes.coach} element={<Coach />} />
          </Routes>
        </BrowserRouter>
      </Flowbite>
    </div>
  );
}

export default App;
