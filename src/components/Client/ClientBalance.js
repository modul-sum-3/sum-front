import axios from 'axios';
import { useState, useEffect } from 'react';
import { NotificationManager } from 'react-notifications';
import user from '../../data/store';

const ClientBalance = () => {
  const [balance, setBalance] = useState(0);
  const [newBalance, setNewBalance] = useState();
  const [stateChange, setStateChange] = useState();
  const id = user((state) => state.id);
  // const userData = user((state) => state.userData);
  // const setUser = user((state) => state.setUser);

  useEffect(() => {
    axios
      .get(`https://springboot-385918.oa.r.appspot.com/api/client/${id}`)
      .then((res) => {
        setBalance(res.data.balance);
      })
      .catch((e) => {
        NotificationManager.success(e);
      });
  }, [id, newBalance, stateChange]);

  const handleBalanceChange = (e) => {
    e.preventDefault();

    if (newBalance <= 0) {
      NotificationManager.error('U cannot add zero or minus to your balance');
      return;
    }
    if (newBalance > 100) {
      NotificationManager.error('Dont exaggerate');
      return;
    }

    axios
      .patch(`https://springboot-385918.oa.r.appspot.com/api/client/${id}?amount=${newBalance}`)
      .then(() => {
        setStateChange(Math.random());
        NotificationManager.success('Successfuly added');
      })
      .catch(() => {
        NotificationManager.error('Cannot change balance, try again later');
      });
  };

  return (
    <div className="flex flex-col">
      <div className="flex justify-center text-xl font-semibold">Current Balance: {balance}$</div>
      <div className="mt-8 flex justify-center">
        <form className="flex w-2/3 flex-col gap-2" onSubmit={handleBalanceChange} id="userBalance">
          <label htmlFor="balance">
            <input
              type="number"
              onChange={(e) => setNewBalance(e.target.value)}
              className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary focus:ring-primary disabled:cursor-not-allowed disabled:opacity-50"
            />
          </label>
          <button
            type="submit"
            id="button-add"
            className="rounded-lg bg-primary px-5 py-2.5 text-center text-sm font-medium text-white transition-colors hover:bg-hover"
          >
            Add
          </button>
        </form>
      </div>
    </div>
  );
};

export default ClientBalance;
