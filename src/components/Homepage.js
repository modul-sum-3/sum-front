import axios from 'axios';
import { useEffect, useState } from 'react';
import { NotificationManager } from 'react-notifications';

const Homepage = () => {
  const [clientId, setClientId] = useState('');
  const [user, setUser] = useState({});
  const [display, setDisplay] = useState('');

  useEffect(() => {
    if (clientId.length === 0) {
      setDisplay('hidden');
    } else {
      setDisplay('block');
    }
  }, [clientId]);

  const handleSearch = () => {
    axios
      .get(`https://springboot-385918.oa.r.appspot.com/api/client/${clientId}`)
      .then((res) => {
        setUser(res.data);
        NotificationManager.success('Successfuly found user');
      })
      .catch((e) => {
        NotificationManager.error(`Cannot get user - ${e}`);
      });
  };

  return (
    <div className="flex h-screen w-full flex-col">
      <div className="mt-12 flex justify-center">
        <input
          placeholder="Insert Client ID"
          id="insertId"
          type="text"
          onChange={(event) => setClientId(event.target.value)}
          className="block w-2/3 rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary focus:ring-primary disabled:cursor-not-allowed disabled:opacity-50"
        />
        <button
          type="button"
          onClick={handleSearch}
          className="ml-3 rounded-lg bg-primary px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-hover"
        >
          Search
        </button>
      </div>
      <div className="mt-10 flex h-3/4 justify-center">
        <div
          className={`${display} block w-3/4 rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary focus:ring-primary disabled:cursor-not-allowed disabled:opacity-50`}
        >
          First name: {user.first_name}
          <br />
          Last name: {user.last_name}
          <br />
          Birthday: {user.date_of_birth}
          <br />
          Phone: {user.phoneNumber}
          <br />
          Email: {user.email}
        </div>
      </div>
    </div>
  );
};

export default Homepage;
