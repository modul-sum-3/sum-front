import axios from 'axios';
import { useEffect, useState } from 'react';
import { NotificationManager } from 'react-notifications';

const ClientInfoForm = ({ clientID }) => {
  const [phone, setPhone] = useState('');
  const [date, setDate] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [user, setUser] = useState([]);

  useEffect(() => {
    axios
      .get(`http://springboot-385918.oa.r.appspot.com/api/client/${clientID}`)
      .then((res) => {
        setUser(res.data);
        setPhone(res.data.phoneNumber);
        setDate(res.data.date_of_birth);
        setFirstName(res.data.first_name);
        setLastName(res.data.last_name);
      })
      .catch((e) => {
        NotificationManager.success(e);
      });
  }, [clientID]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      user.date_of_birth === date &&
      user.phoneNumber === phone &&
      user.first_name === firstName &&
      user.last_name === lastName
    ) {
      NotificationManager.error('U havent changed anything');
      return;
    }

    const newData = {
      first_name: firstName,
      last_name: lastName,
      date_of_birth: date,
      phoneNumber: phone,
    };

    axios
      .patch(`https://springboot-385918.oa.r.appspot.com/api/client/change/${clientID}`, newData)
      .then(() => {
        NotificationManager.success('Successfuly changed');
      })
      .catch(() => {
        NotificationManager.error('Cannot change, try again later');
      });
  };

  return (
    <div className="flex  justify-center text-black">
      {user.length !== 0 ? (
        <form className="flex w-2/3 flex-col gap-2" onSubmit={handleSubmit} id="userSettings">
          <label htmlFor="name">
            Name
            <input
              value={firstName}
              id="phone-input"
              type="tel"
              onChange={(e) => setFirstName(e.target.value)}
              className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary focus:ring-primary disabled:cursor-not-allowed disabled:opacity-50"
            />
          </label>
          <label htmlFor="surname">
            Surname
            <input
              value={lastName}
              id="phone-input"
              type="tel"
              onChange={(e) => setLastName(e.target.value)}
              className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary focus:ring-primary disabled:cursor-not-allowed disabled:opacity-50"
            />
          </label>
          <label htmlFor="phoneNumber">
            Phone
            <input
              value={phone}
              id="phone-input"
              type="tel"
              onChange={(e) => setPhone(e.target.value)}
              className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary focus:ring-primary disabled:cursor-not-allowed disabled:opacity-50"
            />
          </label>
          <label htmlFor="birthdate">
            Birthday
            <input
              value={date}
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
      ) : null}
    </div>
  );
};

export default ClientInfoForm;
