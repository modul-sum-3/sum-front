import clsx from 'clsx';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as ArrowIcon } from '../assets/arrow-icon.svg';

const ClubRow = ({ id, city, location, street, zip }) => {
  const [show, setShow] = useState(false);

  const accordionToggle = () => {
    if (show) {
      setShow(false);
    } else {
      setShow(true);
    }
  };
  return (
    <div className="gap-0">
      <div className="flex w-full justify-between rounded-t-lg border-gray-200 bg-white shadow hover:bg-gray-50">
        {/* <Link
          to={`/${id}`}
          
        > */}
        <button
          type="button"
          onClick={accordionToggle}
          className="flex w-full items-center justify-between rounded-t-lg border-gray-200 bg-white p-0 align-middle shadow hover:bg-gray-50"
        >
          <div className="clubs__list__row flex justify-between whitespace-nowrap p-6">
            <h2 className="w-[400px] self-center font-semibold text-gray-600 ">
              FitNest Club, {city}
            </h2>
          </div>

          <div className="flex w-[575px] gap-8">
            <h3 className="w-[110px] self-center font-semibold text-gray-600">{location}</h3>
            <p className="self-center text-gray-600">
              ul. {street}, {zip}
            </p>
          </div>

          {/* <p className="self-center text-gray-600">Click to expand</p> */}
          <div className="self-center p-6">
            <ArrowIcon className={clsx('h-5 w-5 shrink-0 fill-primary')} />
          </div>
        </button>
        {/* </Link> */}
      </div>

      {/* accordion */}
      {show && (
        <Link to={`/${id}`}>
          <div className="w-full rounded-b-lg border-gray-200 bg-white shadow hover:bg-gray-50">
            <div className="flex w-[575px] gap-8">
              <h3 className="w-[100px] self-center font-semibold text-gray-600">{location}</h3>
              <p className="self-center text-gray-600">
                ululul ululul ululul ululul ululul ululul ululul ululul ululul ululul ululul ululul
                ululul ululul ululul ululul
              </p>
            </div>
          </div>
        </Link>
      )}
    </div>
  );
};

export default ClubRow;
