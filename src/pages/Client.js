import axios from 'axios';
import { useState } from 'react';
import { NotificationManager, NotificationContainer } from 'react-notifications';
import Navbar from '../components/Navbar';
import ClientInfoForm from '../components/ClientInfoForm';
import ClientBalance from '../components/ClientBalance';
import ClientTrainings from '../components/ClientTrainings';
import Footer from '../components/Footer';

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
        <div className="col-span-1 row-span-2 mt-16 ">
          <ClientTrainings className="row-span-2" />
        </div>
        <div className="mt-16">
          <ClientBalance balance={balance} className="" />
        </div>
        <div className="mb-16 mt-[-10%]">
          <ClientInfoForm className="" />
        </div>
      </div>
      <NotificationContainer />
      <Footer />
    </div>
  );
};
export default Client;
