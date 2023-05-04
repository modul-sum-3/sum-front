import axios from 'axios';
import { useState } from 'react';
import { NotificationManager } from 'react-notifications';

const ClientBalance = ({ balance }) => {
  const [newBalance, setNewBalance] = useState();

  const handleBalanceChange = (e) => {
    e.preventDefault();

    if (newBalance <= 0) {
      NotificationManager.error('U cannot add zero or minus to your balance');
      return;
    }

    axios
      .put('', {
        balance,
      })
      .then(() => {
        NotificationManager.success('Successfuly added');
      })
      .catch(() => {
        NotificationManager.error('Cannot change balance, try again later');
      });
  };

  return (
    <div className="flex flex-col ">
      <div className="flex justify-center">Current Balance: {balance}</div>
      <div className="mt-8 flex justify-center ">
        <form className="flex w-1/2 flex-col gap-2" onSubmit={handleBalanceChange} id="userBalance">
          <label htmlFor="balance">
            <input
              type="number"
              onChange={(e) => setNewBalance(e.target.value)}
              className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary focus:ring-primary disabled:cursor-not-allowed disabled:opacity-50"
            />
          </label>
          <button
            type="submit"
            className="rounded-lg bg-gradient-to-r from-primary to-green-100 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gradient-to-br focus:outline-none focus:ring-4 focus:ring-primary"
          >
            Add
          </button>
        </form>
      </div>
    </div>
  );
};

export default ClientBalance;
