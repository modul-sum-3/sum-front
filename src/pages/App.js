import { Flowbite } from 'flowbite-react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import routes from '../data/routes';
import Client from './Client';
import Clubs from './Clubs';
import Coach from './Coach';
import Contact from './Contact';
import Employee from './Employee';
import Home from './Home';
import Login from './Login';
import Membership from './Membership';
import Register from './Register';

const App = () => {
  return (
    <div className="App">
      {/* //* There will be authorization and role condition */}
      <Flowbite>
        <BrowserRouter>
          <Routes>
            <Route path={routes.home} element={<Home />} />
            <Route path={routes.clubs} element={<Clubs />} />
            <Route path={routes.membership} element={<Membership />} />
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
};

export default App;
