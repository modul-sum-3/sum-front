import clsx from 'clsx';
import { ReactComponent as ArrowIcon } from '../assets/arrow-icon.svg';

const ClubRow = ({ city, location }) => (
  <div className="w-full items-center rounded-lg border-gray-200 bg-white p-6 shadow">
    <a href="/" className="flex justify-between whitespace-nowrap">
      <h2 className="w-[500px] self-center text-gray-600">FitNest Club, {city}</h2>
      <h3 className="w-[400px] self-center text-gray-600">{location}</h3>
      <p className="self-center text-gray-600">Check calendar </p>
      <ArrowIcon className={clsx('h-5 w-5 shrink-0 self-center')} />
    </a>
  </div>
);

export default ClubRow;
