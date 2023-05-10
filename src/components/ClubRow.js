import clsx from 'clsx';
import { Link } from 'react-router-dom';
import { ReactComponent as ArrowIcon } from '../assets/arrow-icon.svg';
import routes from '../data/routes';

const ClubRow = ({ city, location }) => {
  return (
    <div className="w-full items-center rounded-lg border-gray-200 bg-white p-6 shadow hover:w-[101%] hover:bg-gray-50">
      <Link to={routes.home} className="clubs__list__row flex justify-between whitespace-nowrap">
        <h2 className="w-[500px] self-center font-semibold text-gray-600">FitNest Club, {city}</h2>
        <h3 className="w-[400px] self-center font-semibold text-gray-600">{location}</h3>
        <p className="self-center text-gray-600">Check calendar </p>
        <ArrowIcon className={clsx('h-5 w-5 shrink-0 self-center fill-primary')} />
      </Link>
    </div>
  );
};

export default ClubRow;
