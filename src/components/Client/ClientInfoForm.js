import axios from 'axios';
import { useState } from 'react';
import { NotificationManager } from 'react-notifications';
import user from '../../data/store';

const ClientInfoForm = () => {
  const [phone, setPhone] = useState('');
  const [date, setDate] = useState('');

  const userData = user((state) => state.userData);

  // function isValidEmail(newEmail) {
  //   return /\S+@\S+\.\S+/.test(newEmail);
  // }

  const handleSubmit = (e) => {
    e.preventDefault();

    if (userData.date_of_birth === date && userData.phoneNumber === phone) {
      NotificationManager.error('U havent changed anything');
      return;
    }

    axios
      .put('', {})
      .then(() => {
        NotificationManager.success('Successfuly changed');
      })
      .catch(() => {
        NotificationManager.error('Cannot change, try again later');
      });
  };

  return (
    <div className="flex  justify-center text-black">
      <form className="flex w-2/3 flex-col gap-2" onSubmit={handleSubmit} id="userSettings">
        <label htmlFor="name">
          Name
          <input
            type="text"
            value={userData.first_name}
            disabled
            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary focus:ring-primary disabled:cursor-not-allowed disabled:opacity-50"
          />
        </label>
        <label htmlFor="surname">
          Surname
          <input
            type="text"
            value={userData.last_name}
            disabled
            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary focus:ring-primary disabled:cursor-not-allowed disabled:opacity-50"
          />
        </label>
        <label htmlFor="phoneNumber">
          Phone
          <input
            value={userData.phoneNumber}
            id="phone-input"
            type="tel"
            onChange={(e) => setPhone(e.target.value)}
            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary focus:ring-primary disabled:cursor-not-allowed disabled:opacity-50"
          />
        </label>
        <label htmlFor="birthdate">
          Birthday
          <input
            value={userData.date_of_birth}
            type="date"
            onChange={(e) => setDate(e.target.value)}
            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary focus:ring-primary disabled:cursor-not-allowed disabled:opacity-50"
          />
        </label>
        <button
          type="submit"
          className="rounded-lg bg-primary px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-hover focus:outline-none focus:ring-4 focus:ring-primary"
        >
          Save
        </button>
      </form>
    </div>
  );
};

export default ClientInfoForm;
