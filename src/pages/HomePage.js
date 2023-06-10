/* eslint-disable tailwindcss/no-contradicting-classname */
// import Jumbotron from '../components/Site/Jumbotron';
import { Link } from 'react-router-dom';
import MainTemplate from '../templates/MainTemplate';
import routes from '../data/routes';

const Home = () => {
  return (
    <MainTemplate>
      <div className="absolute left-1/2 top-1/2 -mt-10 w-full -translate-x-1/2 -translate-y-1/2 text-center text-7xl uppercase text-white">
        Reach your goals at Fitnest
        <div className="mt-10 flex flex-row justify-center space-x-4 space-y-0">
          <Link
            to={routes.membership}
            className="inline-flex items-center justify-center rounded-lg bg-gray-600 px-5 py-4 text-center text-xl font-semibold text-white shadow-inner transition-all duration-500 hover:scale-110 hover:bg-primary"
          >
            Check out our offer
            <svg
              aria-hidden="true"
              className="-mr-1 ml-2 h-4 w-4"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </Link>
        </div>
      </div>
    </MainTemplate>
  );
};
export default Home;
