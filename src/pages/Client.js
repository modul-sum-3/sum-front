import Navbar from '../components/Navbar';
import ClientInfoForm from '../components/ClientInfoForm';
import ClientBalance from '../components/ClientBalance';

const Client = () => {
  return (
    <div className="flex min-h-screen flex-col bg-gray-200">
      <Navbar />
      <div className="grid grid-cols-2 grid-rows-2  ">
        <div className="col-span-1 row-span-2">01</div>
        <ClientBalance className="col-span-1 row-span-1" />
        <ClientInfoForm className="col-span-1 row-span-1" />
      </div>
    </div>
  );
};
export default Client;
