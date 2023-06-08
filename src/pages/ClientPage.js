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
      <div className="absolute left-1/2 top-1/2 flex w-full max-w-screen-2xl -translate-x-1/2 -translate-y-1/2 gap-6 rounded-xl border-r bg-white p-6">
        <div className="flex w-3/5 border-r">
          <div className="flex w-full flex-col gap-8 pr-6">
            <ClientMembership />
            <ClientTrainings />
          </div>
        </div>

        <div className="flex w-2/5 flex-col">
          <div className="flex h-full flex-col justify-between gap-20">
            <ClientBalance balance={userData.balance} />
            <ClientInfoForm />
          </div>
        </div>
      </div>

      <NotificationContainer />
    </div>
  );
};
export default Client;
