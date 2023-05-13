import { NotificationContainer } from 'react-notifications';
import Navbar from '../components/Site/Navbar';
import ClientInfoForm from '../components/Client/ClientInfoForm';
import ClientBalance from '../components/Client/ClientBalance';
import ClientTrainings from '../components/Client/ClientTrainings';
import Footer from '../components/Site/Footer';
import user from '../data/store';

const Client = () => {
  const userData = user((state) => state.userData);

  return (
    <div className="flex h-full min-h-screen flex-col bg-gray-200">
      <Navbar />
      <div className=" grid h-screen grid-cols-2 grid-rows-2 gap-4">
        <div className="col-span-1 row-span-2 mt-16 ">
          <ClientTrainings className="row-span-2" />
        </div>
        <div className="mt-16">
          <ClientBalance balance={userData.balance} className="" />
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
