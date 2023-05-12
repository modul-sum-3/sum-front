import { Flowbite } from 'flowbite-react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import routes from '../data/routes';
import Client from './ClientPage';
import ClubPage from './ClubPage';
import Clubs from './ClubsPage';
import Coach from './CoachPage';
import Contact from './ContactPage';
import Employee from './EmployeePage';
import Home from './HomePage';
import Login from './LoginPage';
import Membership from './MembershipPage';
import Register from './RegisterPage';

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
            <Route path={routes.club} element={<ClubPage />} />
            {/* //* Those routes will be moved but for now we need to have access to them */}
            <Route path={routes.client} element={<Client />} />
            <Route path={routes.coach} element={<Coach />} />
            <Route path={routes.employee} element={<Employee />} />
          </Routes>
        </BrowserRouter>
      </Flowbite>
    </div>
  );
};

export default App;
