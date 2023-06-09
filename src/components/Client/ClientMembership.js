import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import user from '../../data/store';

const ClientMembership = () => {
  const [membership, setMembership] = useState([]);
  const [carnet, setCarnet] = useState([]);
  const [finalStart, setFinalStart] = useState('');
  const [finalEnd, setFinalEnd] = useState('');
  const Userid = user((state) => state.id);
  const token = user((state) => state.token);

  useEffect(() => {
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };

    axios
      .get(
        `https://springboot-385918.oa.r.appspot.com/api/transaction/clientActive/${Userid}`,
        config,
      )
      .then((res) => {
        setMembership(res.data);
        axios
          .get(`https://springboot-385918.oa.r.appspot.com/api/carnets/${res.data.carnetID}`)
          .then((res2) => {
            setCarnet(res2.data);
          });
      });
  }, [Userid, token]);

  useEffect(() => {
    if (membership.length !== 0) {
      const newDate2 = new Date(membership.transactionDate);
      newDate2.setHours(newDate2.getHours() + 2);
      const updatedDate2 = newDate2.toISOString();
      const date2 = updatedDate2.slice(0, 10);
      const time2 = updatedDate2.slice(11, 16);
      setFinalStart(`${date2} - ${time2}`);
      const newDate = new Date(membership.expireDate);
      newDate.setHours(newDate.getHours() + 2);
      const updatedDate = newDate.toISOString();
      const date = updatedDate.slice(0, 10);
      const time = updatedDate.slice(11, 16);
      setFinalEnd(`${date} - ${time}`);
    }
  }, [membership]);

  return (
    <div className="flex w-full flex-col">
      {membership.length !== 0 || carnet.length !== 0 ? (
        <div className="grid gap-4 text-center text-lg">
          <label className="col-span-3 grid text-xl font-semibold" htmlFor="name">
            Your membership:
            <div className=" mt-4 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2 text-lg text-gray-900 focus:border-primary focus:ring-primary disabled:cursor-not-allowed disabled:opacity-50">
              {carnet.name}
            </div>
          </label>

          <label className="" htmlFor="name">
            Start date:
            <div className="mb-3 mt-2 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2 text-base text-gray-900 focus:border-primary focus:ring-primary disabled:cursor-not-allowed disabled:opacity-50">
              {finalStart}
            </div>
          </label>
          <label className="" htmlFor="name">
            Duration:
            <div className="mb-3 mt-2  block w-full rounded-lg border border-gray-300 bg-gray-50 p-2 text-base text-gray-900 focus:border-primary focus:ring-primary disabled:cursor-not-allowed disabled:opacity-50">
              {carnet.duration}
            </div>
          </label>
          <label className="" htmlFor="name">
            Expire date:
            <div className="mb-3 mt-2  block w-full rounded-lg border border-gray-300 bg-gray-50 p-2 text-base text-gray-900 focus:border-primary focus:ring-primary disabled:cursor-not-allowed disabled:opacity-50">
              {finalEnd}
            </div>
          </label>
        </div>
      ) : (
        <div className="block w-full text-center">
          <div className="mb-5 text-xl font-semibold">Your membership:</div>
          You dont have membership yet, go to{' '}
          <Link to="/membership" className="underline">
            Membership
          </Link>{' '}
          page to buy it!{' '}
        </div>
      )}
    </div>
  );
};

export default ClientMembership;
