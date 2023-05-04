import axios from 'axios';
import { useState } from 'react';
import { NotificationManager, NotificationContainer } from 'react-notifications';
import Navbar from '../components/Navbar';
import ClientInfoForm from '../components/ClientInfoForm';
import ClientBalance from '../components/ClientBalance';
import ClientTrainings from '../components/ClientTrainings';

const Client = () => {
  const [client, setClient] = useState({});
  const [balance, setBalance] = useState();

  // axios
  //   .get('')
  //   .then((res) => {
  //     setClient(res.data);
  //     setBalance(client.balance);
  //   })
  //   .catch(() => NotificationManager.error('Couldnt get data'));

  return (
    <div className="flex h-full min-h-screen flex-col bg-gray-200">
      <Navbar />
      <div className=" grid h-full grid-cols-2 grid-rows-2 gap-4">
        <div className="col-span-1 row-span-2 mt-24 ">
          <ClientTrainings className="row-span-2 " />
        </div>
        <div className="mb-3 mt-24">
          <ClientBalance balance={balance} className="" />
        </div>
        <div>
          <ClientInfoForm className="" />
        </div>
      </div>
      <NotificationContainer />
    </div>
  );
};
export default Client;
