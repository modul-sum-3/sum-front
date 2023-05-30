import clsx from 'clsx';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as ArrowIcon } from '../../assets/arrow-icon.svg';
import { ReactComponent as TrainFour } from '../../assets/trainings/4.svg';

const ClubRow = ({ id, city, location, street, zip, opens, closes }) => {
  const [show, setShow] = useState(false);

  const accordionToggle = () => {
    setShow((prev) => !prev);
  };
  return (
    <div className="gap-0">
      <div className="relative flex w-full justify-between rounded-t-lg border-gray-200 bg-white shadow hover:bg-gray-50">
        <button
          type="button"
          onClick={accordionToggle}
          className="flex w-full items-center justify-between rounded-t-lg border-gray-200 bg-white px-12 align-middle shadow hover:bg-gray-50"
        >
          <div className="clubs__list__row flex whitespace-nowrap py-6">
            <h2 className="self-center font-semibold text-gray-600">FitNest Club, {city}</h2>
          </div>

          <div className="absolute left-1/2 -translate-x-1/2">
            <h3 className="self-center font-semibold text-gray-600">{location}</h3>
            <p className="self-center text-gray-600">
              ul. {street}, {zip}
            </p>
          </div>

          <div className="flex gap-6 self-center text-gray-400">
            {show ? <p className="w-12">Hide</p> : <p className="w-14">Expand</p>}
            <ArrowIcon
              className={clsx('h-5 w-5 shrink-0 fill-primary', show ? '-rotate-90' : 'rotate-90')}
            />
          </div>
        </button>
      </div>
      <div
        className={`m-auto w-full rounded-b-lg border-gray-200 bg-white p-0 shadow ${
          show ? '' : 'hidden'
        }`}
      >
        <div className="flex items-center justify-between gap-10 whitespace-nowrap px-12 py-6">
          <div className="flex gap-4">
            <h3>Godziny otwarcia: </h3>
            <h3>
              {opens} - {closes}
            </h3>
          </div>

          {/* training icons */}
          <div className="absolute left-1/2 flex w-96 -translate-x-1/2 justify-center rounded-xl bg-primary/20">
            <TrainFour className="h-12 w-12" />
            <TrainFour className="h-12 w-12" />
            <TrainFour className="h-12 w-12" />
            <TrainFour className="h-12 w-12" />
          </div>

          <Link to={`/${id}`} className="min-w-fit rounded-xl bg-primary px-4 py-2">
            <div className="text-lg font-semibold text-white">Click to see the schedule</div>
          </Link>
        </div>
      </div>

      {/* accordion */}
    </div>
  );
};

export default ClubRow;
