import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { NotificationContainer } from 'react-notifications';
import ConfirmTraninings from '../components/Employee/ConfirmTrainings';
import HomepageEmployee from '../components/Employee/HomepageEmployee';
import RegisterForm from '../components/Site/RegisterForm';
import user from '../data/store';
import TimetableEmployee from '../components/Employee/TimetableEmployee';

const StaffTemplate = () => {
  const [page, setPage] = useState('homepage');
  const [isCenter, setIsCenter] = useState('');
  const setRole = user((state) => state.setRole);
  const setToken = user((state) => state.setToken);

  const navigate = useNavigate();

  const handleLogout = () => {
    setRole('');
    setToken('');
    navigate('/');
  };

  const componentSwitch = (com) => {
    let component;
    if (com === 'homepage') {
      component = <HomepageEmployee />;
    }
    if (com === 'timetable') {
      component = <TimetableEmployee />;
    }
    if (com === 'confirmTraninings') {
      component = <ConfirmTraninings />;
    }
    if (com === 'registerClient') {
      component = <RegisterForm width="w-2/3" display="none" />;
    }
    return <div>{component}</div>;
  };

  return (
    <div className="m-auto flex min-h-screen flex-col items-center bg-gray-200">
      <div>
        <aside
          id="default-sidebar"
          className="absolute h-full w-64 -translate-x-full shadow-lg transition-transform sm:translate-x-0"
          aria-label="Sidebar"
        >
          <div className="flex h-full overflow-y-auto bg-gray-50 px-3 py-4 dark:bg-gray-800">
            <ul className="flex flex-col h-full space-y-2 font-medium">
              <li>
                <button
                  type="button"
                  id="homepage"
                  onClick={() => {
                    setPage('homepage');
                    setIsCenter('');
                  }}
                  className="flex items-center rounded-lg p-2 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                >
                  <svg
                    aria-hidden="true"
                    className="h-6 w-6 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z" />
                    <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z" />
                  </svg>
                  <span className="ml-3">Homepage</span>
                </button>
              </li>
              <li>
                <button
                  type="button"
                  id="timetable"
                  onClick={() => {
                    setPage('timetable');
                    setIsCenter('');
                  }}
                  className="flex items-center rounded-lg p-2 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                >
                  <svg
                    aria-hidden="true"
                    className="h-6 w-6 shrink-0 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                  </svg>
                  <span className="ml-3 flex-1 whitespace-nowrap">Timetable</span>
                </button>
              </li>
              <li>
                <button
                  type="button"
                  id="registerClient"
                  onClick={() => {
                    setPage('registerClient');
                    setIsCenter('items-center');
                  }}
                  className="flex items-center rounded-lg p-2 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                >
                  <svg
                    aria-hidden="true"
                    className="h-6 w-6 shrink-0 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="ml-3 flex-1 whitespace-nowrap">Register Client</span>
                </button>
              </li>
              <li className="grow">
                <button
                  type="button"
                  id="confirmTraninings"
                  onClick={() => {
                    setPage('confirmTraninings');
                    setIsCenter('');
                  }}
                  className="flex items-center rounded-lg p-2 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                >
                  <svg
                    aria-hidden="true"
                    className="h-6 w-6 shrink-0 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="ml-3 flex-1 whitespace-nowrap">Confirm trainings</span>
                </button>
              </li>
              <li className="">
                <button
                  type="button"
                  id="logout"
                  onClick={handleLogout}
                  className="flex items-center rounded-lg p-2 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                >
                  <svg
                    aria-hidden="true"
                    className="h-6 w-6 shrink-0 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="ml-3 flex-1 whitespace-nowrap">Log out</span>
                </button>
              </li>
            </ul>
          </div>
        </aside>
        <div className="h-screen w-full sm:ml-64">
          <div
            className={`mb-4 grid h-full w-[1000px] ${isCenter} bg-gray-50 p-6 shadow-xl dark:bg-gray-800`}
          >
            {componentSwitch(page)}
          </div>
        </div>
      </div>
      <NotificationContainer />
    </div>
  );
};

export default StaffTemplate;
