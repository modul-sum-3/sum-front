import clsx from 'clsx';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as CheckIcon } from '../../assets/check-icon.svg';
import routes from '../../data/routes';
import ModalLogin from './ModalLogin';
// import axios from 'axios';
// import { NotificationManager, NotificationContainer } from 'react-notifications';

const MembershipCard = ({ title, price, benefits }) => {
  const balance = 10;
  const calculatedBalance = balance - price;
  const isAunth = false;
  const [showModal, setShowModal] = useState(false);

  return (
    <div>
      <div className="w-full max-w-sm rounded-lg border border-gray-200 bg-white p-4 shadow sm:p-8">
        <h5 className="mb-4 text-xl font-medium uppercase text-gray-500">{title}</h5>
        <div className="flex items-baseline text-gray-900 dark:text-white">
          <span className="text-3xl font-semibold">$</span>
          <span className="text-5xl font-extrabold tracking-tight">{price}</span>
          <span className="ml-1 text-xl font-normal text-gray-500">/month</span>
        </div>
        <ul className="my-7 space-y-5">
          {benefits.map(({ text, crossed }) => (
            <li className="flex space-x-3">
              <CheckIcon
                className={clsx('h-5 w-5 shrink-0', crossed ? 'text-gray-500' : 'text-primary')}
              />
              <span className="text-base font-normal leading-tight text-gray-500">{text}</span>
            </li>
          ))}
        </ul>

        <button
          onClick={() => setShowModal(true)}
          type="button"
          className="inline-flex w-full justify-center rounded-lg bg-primary px-5 py-2.5 text-center text-sm font-semibold text-white hover:bg-green-100 focus:outline-none focus:ring-4 focus:ring-gray-300"
        >
          Choose plan
        </button>
      </div>
      <ModalLogin isVisible={showModal} onClose={() => setShowModal(false)} title={title}>
        {isAunth && (
          <div className="flex flex-col items-center gap-4">
            <h3 className="font-semibold">It looks like you're not logged in!</h3>
            <Link
              to={routes.login}
              className="rounded-lg bg-primary px-6 py-2 font-semibold text-white"
            >
              Login
            </Link>
            <p>or</p>
            <Link
              to={routes.register}
              className="rounded-lg bg-primary px-6 py-2 font-semibold text-white"
            >
              Register
            </Link>
          </div>
        )}
        {!isAunth && (
          <div className="flex flex-col gap-4">
            {calculatedBalance >= 0 && (
              <div className="flex flex-col gap-4">
                <p>
                  Your current balance is: <span className="font-semibold">{balance}$</span>. We
                  will take <span className="font-semibold">{price}$</span> from your account.
                </p>
                <p>
                  Your balance after the transaction:{' '}
                  <span className="font-semibold">{calculatedBalance}$</span>.
                </p>
                <p>
                  Do you want to buy the <span className="font-semibold">{title}</span> membership?
                </p>
                <div className="flex justify-center gap-4">
                  <button
                    type="button"
                    className="rounded-lg bg-orange-600 px-6 py-2 font-semibold text-white"
                    onClick={() => setShowModal(false)}
                  >
                    Cancel
                  </button>
                  <button
                    type="button"
                    className="rounded-lg bg-primary px-6 py-2 font-semibold text-white"
                  >
                    Accept
                  </button>
                </div>
              </div>
            )}

            {calculatedBalance < 0 && (
              <div className="flex flex-col gap-4">
                <h2 className="self-center">You don't have enough funds in your account!</h2>
                <p>
                  Your current balance is: <span className="font-semibold">{balance}$</span>. Your
                  are <span className="font-semibold">{-1 * calculatedBalance}$</span> short.
                </p>

                <p>Do you want to fund your account now?</p>
                <div className="flex justify-center gap-4">
                  <button
                    type="button"
                    className="rounded-lg bg-orange-600 px-6 py-2 font-semibold text-white"
                    onClick={() => setShowModal(false)}
                  >
                    Cancel
                  </button>
                  <button
                    type="button"
                    className="rounded-lg bg-primary px-6 py-2 font-semibold text-white"
                  >
                    Go
                  </button>
                </div>
              </div>
            )}
          </div>
        )}
      </ModalLogin>
    </div>
  );
};

export default MembershipCard;
