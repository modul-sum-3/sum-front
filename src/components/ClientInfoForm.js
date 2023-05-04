import { useState } from 'react';
import axios from 'axios';
import { NotificationManager } from 'react-notifications';

const ClientInfoForm = () => {
  const [client, setClient] = useState({});
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');

  //   axios
  //     .get('')
  //     .then((res) => {
  //       setClient(res.data);
  //       //! Have to change client. values to match database names
  //       setName(client.name);
  //       setSurname(client.surname);
  //       setPhone(client.phone);
  //       setEmail(client.email);
  //     })
  //     .catch(() => NotificationManager.error('Couldnt get data'));

  function isValidEmail(newEmail) {
    return /\S+@\S+\.\S+/.test(newEmail);
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!isValidEmail(email)) {
      NotificationManager.error('Invaild email!');
      return;
    }

    if (client.email === email && client.phone === phone) {
      NotificationManager.error('U havent changed anything');
      return;
    }

    axios
      .put('', {
        email,
        phone,
      })
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
            value={name}
            disabled
            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary focus:ring-primary disabled:cursor-not-allowed disabled:opacity-50"
          />
        </label>
        <label htmlFor="surname">
          Surname
          <input
            type="text"
            value={surname}
            disabled
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
        <label htmlFor="email">
          Email
          <input
            value={email}
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary focus:ring-primary disabled:cursor-not-allowed disabled:opacity-50"
          />
        </label>
        <button
          type="submit"
          className="rounded-lg bg-gradient-to-r from-primary to-green-100 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gradient-to-br focus:outline-none focus:ring-4 focus:ring-primary"
        >
          Save
        </button>
      </form>
    </div>
  );
};

export default ClientInfoForm;
