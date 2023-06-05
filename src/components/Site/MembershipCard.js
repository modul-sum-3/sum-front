import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import routes from '../../data/routes';
import ModalLogin from './ModalLogin';
import user from '../../data/store';
// import axios from 'axios';
// import { NotificationManager, NotificationContainer } from 'react-notifications';

const MembershipCard = ({ title, price, description }) => {
  const [showModal, setShowModal] = useState(false);
  const role = user((state) => state.role);
  const [balance, setBalance] = useState(0);
  const id = user((state) => state.id);
  useEffect(() => {
    axios
      .get(`https://springboot-385918.oa.r.appspot.com/api/client/${id}`)
      .then((res) => {
        setBalance(res.data.balance);
      })
      .catch((e) => {
        console.log(e);
      });
  }, [id]);

  const calculatedBalance = balance - price;
  return (
    <div>
      <div className="h-full w-full max-w-sm rounded-lg border border-gray-200 bg-white p-4 shadow sm:p-8">
        <h5 className="mb-4 text-xl font-medium uppercase text-gray-500">{title}</h5>
        <div className="mb-5 flex items-baseline text-gray-900 dark:text-white">
          <span className="text-3xl font-semibold">$</span>
          <span className="text-5xl font-extrabold tracking-tight">{price}</span>
          <span className="ml-1 text-xl font-normal text-gray-500">/month</span>
        </div>
        <div className="h-[56%]">
          <span className="text-base font-normal leading-tight text-gray-500">{description}</span>
        </div>

        <button
          onClick={() => setShowModal(true)}
          type="button"
          className="mt-5 inline-flex w-full justify-center rounded-lg bg-primary px-5 py-2.5 text-center text-sm font-semibold text-white hover:bg-green-100 focus:outline-none focus:ring-4 focus:ring-gray-300"
        >
          Choose plan
        </button>
      </div>
      <ModalLogin isVisible={showModal} onClose={() => setShowModal(false)} title={title}>
        {role === '' && (
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
        {role === 'CLIENT' && (
          <div className="flex flex-col gap-4">
            {calculatedBalance >= 0 && (
              <div className="flex flex-col gap-2">
                <h2 className="mb-4 self-center">
                  You chose the <span className="font-semibold">{title}</span> membership
                </h2>
                <p>
                  Your current balance is: <span className="font-semibold">{balance}$</span>. We
                  will take <span className="font-semibold">{price}$</span> from your account.
                </p>
                <p>
                  Your balance after the transaction:{' '}
                  <span className="font-semibold">{calculatedBalance}$</span>.
                </p>
                <p className="mt-4">
                  Do you want to buy the <span className="font-semibold">{title}</span> membership?
                </p>
                <div className="mt-4 flex justify-center gap-4">
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
              <div className="flex flex-col gap-2">
                <h2 className="mb-4 self-center">You don't have enough funds in your account!</h2>
                <p>
                  Your current balance is: <span className="font-semibold">{balance}$</span>. Your
                  are <span className="font-semibold">{-1 * calculatedBalance}$</span> short.
                </p>

                <p>Do you want to fund your account now?</p>
                <div className="mt-4 flex justify-center gap-4">
                  <button
                    type="button"
                    className="rounded-lg bg-orange-600 px-6 py-2 font-semibold text-white"
                    onClick={() => setShowModal(false)}
                  >
                    Cancel
                  </button>
                  <Link
                    to={routes.client}
                    className="rounded-lg bg-primary px-6 py-2 font-semibold text-white"
                  >
                    Go
                  </Link>
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
