import axios from 'axios';
import { useEffect, useState } from 'react';
import { NotificationManager } from 'react-notifications';
import ClientCarnet from './ClientCarnet';
import VisitEmployee from './VisitEmployee';

const HomepageEmployee = () => {
  const [clientId, setClientId] = useState('');
  const [user, setUser] = useState({});
  const [display, setDisplay] = useState('');

  useEffect(() => {
    if (clientId.length < 36) {
      setDisplay('hidden');
    }
  }, [clientId]);

  const handleSearch = () => {
    axios
      .get(`https://springboot-385918.oa.r.appspot.com/api/client/${clientId}`)
      .then((res) => {
        setUser(res.data);
        NotificationManager.success('Successfuly found user');

        setDisplay('block');
      })
      .catch((e) => {
        NotificationManager.error(`Cannot get user - ${e}`);
      });
  };

  return (
    <div className="flex w-full flex-col">
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
      <div className="mt-10 flex h-2/3 justify-center">
        <div
          className={`${display} block w-3/4 rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary focus:ring-primary disabled:cursor-not-allowed disabled:opacity-50`}
        >
          <div className="flex flex-col">
            <p className="mt-10 text-center text-2xl">About client:</p>
            <div className="mt-6 flex flex-row items-center justify-center gap-7">
              <section className="flex w-fit flex-col rounded-2xl bg-gray-50 p-2.5 text-sm">
                <div className="mb-5 text-center">Client info:</div>
                <div className=" ">First name: {user.first_name}</div>
                <div className=" ">Last name: {user.last_name}</div>
                <div>Birthday: {user.date_of_birth}</div>
                <div>Phone: {user.phoneNumber}</div>
                <div>Email: {user.email}</div>
              </section>
              {user.length !== 0 ? <ClientCarnet clientId={user.id} /> : null}
            </div>
            <p className="mt-10 text-center text-2xl">Visit information</p>
            <VisitEmployee clientID={clientId} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomepageEmployee;
