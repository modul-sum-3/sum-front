import clsx from 'clsx';
import { useState, useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { MapPinIcon } from '@heroicons/react/24/solid';
import { ReactComponent as ArrowIcon } from '../../assets/arrow-icon.svg';
import { ReactComponent as BoxingIcon } from '../../assets/trainings/boxing.svg';
import { ReactComponent as ZumbaIcon } from '../../assets/trainings/zumba.svg';
import { ReactComponent as YogaIcon } from '../../assets/trainings/yoga.svg';
import { ReactComponent as StretchingIcon } from '../../assets/trainings/stretching.svg';

const ClubRow = ({ clubId, city, location, street, zip, opens, closes, rooms }) => {
  const [show, setShow] = useState(false);
  const [yoga, setYoga] = useState(false);
  const [zumba, setZumba] = useState(false);
  const [boxing, setBoxing] = useState(false);
  const [stretching, setStretching] = useState(false);

  useEffect(() => {
    rooms.forEach((room) => {
      room.categoryList.forEach((category) => {
        const categoryId = category.id;

        if (categoryId === 1) {
          setZumba(true);
        }
        if (categoryId === 2) {
          setBoxing(true);
        }
        if (categoryId === 3) {
          setYoga(true);
        }
        if (categoryId === 4) {
          setStretching(true);
        }
      });
    });
  }, [rooms]);

  const accordionToggle = () => {
    setShow((prev) => !prev);
  };
  return (
    <div className="gap-0">
      <div className="relative flex w-full justify-between rounded-t-lg border-gray-200 bg-white shadow hover:bg-gray-50">
        <button
          type="button"
          onClick={accordionToggle}
          className="flex w-full items-center justify-between rounded-t-lg border-gray-200 bg-white px-12 align-middle shadow transition-colors hover:bg-gray-50"
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
        className={`m-auto w-full rounded-b-lg border-gray-200 bg-gray-50 p-0 shadow ${
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
          <div className="absolute left-1/2 flex w-96 -translate-x-1/2 items-center justify-center gap-5 rounded-xl bg-primary/20 p-4 shadow-inner">
            {zumba && <ZumbaIcon title="Zumba" className="h-7 w-7 fill-gray-800" />}
            {stretching && <StretchingIcon title="Stretching" className="h-7 w-7 fill-gray-800" />}
            {yoga && <YogaIcon title="Yoga" className="h-7 w-7 fill-gray-800" />}
            {boxing && <BoxingIcon title="Boxing" className="white h-7 w-7 fill-gray-800" />}
          </div>
          <div className="flex gap-12">
            <MapPinIcon
              title="See on the map"
              className="h-11 w-11 self-center rounded-full border border-gray-900/5 bg-white p-1 text-primary shadow-md transition-all hover:scale-110"
            />
            <Link
              to={`/sum-front/club/${clubId}`}
              className="min-w-fit rounded-xl bg-primary px-4 py-2 transition-colors hover:bg-hover"
            >
              <div className="text-lg font-semibold text-white">Click to see the schedule</div>
            </Link>
          </div>
        </div>
      </div>

      {/* accordion */}
    </div>
  );
};

export default ClubRow;
