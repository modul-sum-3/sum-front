import clsx from 'clsx';
import { ReactComponent as CheckIcon } from '../assets/check-icon.svg';

const MembershipCard = ({ title, price, benefits }) => (
  <div>
    <div className="w-full max-w-sm rounded-lg border border-gray-200 bg-white p-4 shadow sm:p-8">
      <h5 className="mb-4 text-xl font-medium uppercase text-gray-500 dark:text-gray-400">
        {title}
      </h5>
      <div className="flex items-baseline text-gray-900 dark:text-white">
        <span className="text-3xl font-semibold">$</span>
        <span className="text-5xl font-extrabold tracking-tight">{price}</span>
        <span className="ml-1 text-xl font-normal text-gray-500 dark:text-gray-400">/month</span>
      </div>
      <ul className="my-7 space-y-5">
        {benefits.map(({ text, crossed }) => (
          <li className="flex space-x-3">
            <CheckIcon
              className={clsx('h-5 w-5 shrink-0', crossed ? 'text-gray-500' : 'text-primary')}
            />
            <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
              {text}
            </span>
          </li>
        ))}
      </ul>
      <button
        type="button"
        className="inline-flex w-full justify-center rounded-lg bg-primary px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-green-100 focus:outline-none focus:ring-4 focus:ring-gray-300 dark:focus:ring-blue-900"
      >
        Choose plan
      </button>
    </div>
  </div>
);

export default MembershipCard;
