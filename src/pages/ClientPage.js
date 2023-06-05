import { NotificationContainer } from 'react-notifications';
import ClientBalance from '../components/Client/ClientBalance';
import ClientInfoForm from '../components/Client/ClientInfoForm';
import ClientTrainings from '../components/Client/ClientTrainings';
import Navbar from '../components/Site/Navbar';
import user from '../data/store';
import ClientMembership from '../components/Client/ClientMembership';

const Client = () => {
  const userData = user((state) => state.userData);

  return (
    <div className="flex h-screen flex-col bg-gray-200">
      <Navbar />
      <div className="box-border flex h-full w-full gap-12 self-center py-24">
        <div className="col-1 ml-10 flex w-3/5 flex-col items-center justify-between">
          <ClientMembership />
          <ClientTrainings />
        </div>
        <div className="mr-20 flex w-2/5 flex-col items-stretch justify-between">
          <ClientBalance balance={userData.balance} />
          <ClientInfoForm />
        </div>
      </div>
      {/* <div className=" grid h-screen grid-cols-2 grid-rows-2 gap-4">
        <div className="col-span-1 row-span-2 mt-16 ">
          <ClientTrainings className="row-span-2" />
        </div>
        <div className="mt-16">
          <ClientBalance balance={userData.balance} className="" />
        </div>
        <div className="mb-16 mt-[-10%]">
          <ClientInfoForm className="" />
        </div>
      </div> */}
      <NotificationContainer />
    </div>
  );
};
export default Client;
