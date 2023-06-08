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
    <div className="flex flex-col items-center">
      <p className="mb-4 text-xl font-semibold">Your information: </p>
      <div className="flex w-full justify-center">
        <form className="flex w-2/3 flex-col gap-2" onSubmit={handleSubmit} id="userSettings">
          <label htmlFor="name">
            Name
            <div className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary focus:ring-primary disabled:cursor-not-allowed disabled:opacity-50">
              {userData.first_name}
            </div>
          </label>
          <label htmlFor="surname">
            Surname
            <div className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary focus:ring-primary disabled:cursor-not-allowed disabled:opacity-50">
              {userData.last_name}
            </div>
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
            className="rounded-lg bg-primary px-5 py-2.5 text-center text-sm font-medium text-white transition-colors hover:bg-hover"
          >
            Save
          </button>
        </form>
      </div>
    </div>
  );
};

export default ClientInfoForm;
