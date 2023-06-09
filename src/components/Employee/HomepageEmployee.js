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
      <div className="text-center text-2xl font-semibold">Enter client ID:</div>
      <div className="mt-12 flex justify-center">
        <input
          placeholder="Enter client ID"
          id="insertId"
          type="text"
          onChange={(event) => setClientId(event.target.value)}
          className="block w-2/3 rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 focus:border-primary focus:ring-primary disabled:cursor-not-allowed disabled:opacity-50"
        />
        <button
          type="button"
          onClick={handleSearch}
          className="ml-3 rounded-lg bg-primary px-5 py-2.5 text-center font-medium text-white transition-colors hover:bg-hover"
        >
          Search
        </button>
      </div>

      <div className="mt-10 h-[750px] overflow-auto">
        <div className="mt-2 flex  w-full flex-col items-center justify-center gap-8 ">
          <div
            className={`${display} block  w-4/6  rounded-lg border border-gray-300 bg-gray-50 p-2.5 font-medium text-gray-900 focus:border-primary focus:ring-primary disabled:cursor-not-allowed disabled:opacity-50`}
          >
            <div className="my-2 flex w-full flex-col">
              <p className=" text-center text-2xl font-semibold">About client:</p>
              <div className="mt-4 flex flex-col items-center justify-center gap-2">
                <section className="flex w-full flex-wrap justify-center gap-4 gap-y-0 rounded-2xl bg-gray-50">
                  <p className=" ">First name: {user.first_name}</p>
                  <p className=" ">Last name: {user.last_name}</p>
                  <p>Date of birth: {user.date_of_birth}</p>
                  <p>Phone: {user.phoneNumber}</p>
                  <p>Email: {user.email}</p>
                </section>
                {user.length !== 0 ? <ClientCarnet clientId={user.id} /> : null}
              </div>
            </div>
          </div>
          <div
            className={`${display} block w-4/6  rounded-lg border border-gray-300 bg-gray-50 p-2.5 py-4 font-medium text-gray-900 focus:border-primary focus:ring-primary disabled:cursor-not-allowed disabled:opacity-50`}
          >
            <p className="text-center text-2xl font-semibold">Visit information</p>
            <VisitEmployee clientID={clientId} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomepageEmployee;
