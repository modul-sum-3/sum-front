import axios from 'axios';
import { useEffect, useState } from 'react';
import { NotificationManager } from 'react-notifications';
import user from '../../data/store';
import ModalLogin from '../Site/ModalLogin';

const ClientCarnet = ({ clientId }) => {
  const token = user((state) => state.token);
  const [memberships, setMemberships] = useState([]);
  const [membership, setMembership] = useState([]);
  const [carnet, setCarnet] = useState([]);

  const [chosenMembership, setChosenMembership] = useState();

  const [showModal, setShowModal] = useState(false);

  const [finalStart, setFinalStart] = useState('');
  const [finalEnd, setFinalEnd] = useState('');

  const [stateHandler, setStateHandler] = useState();

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

  useEffect(() => {
    axios
      .get('https://springboot-385918.oa.r.appspot.com/api/carnets')
      .then((res) => {
        setMemberships(res.data);
      })
      .catch((e) => {
        NotificationManager.error(e);
      });
  }, []);

  useEffect(() => {
    setCarnet([]);
    setMembership([]);
    setFinalEnd();
    setFinalStart();

    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };

    axios
      .get(
        `https://springboot-385918.oa.r.appspot.com/api/transaction/clientActive/${clientId}`,
        config,
      )
      .then((res2) => {
        setMembership(res2.data);
        axios
          .get(`https://springboot-385918.oa.r.appspot.com/api/carnets/${res2.data.carnetID}`)
          .then((res3) => {
            setCarnet(res3.data);
          });
      });
  }, [clientId, token, stateHandler]);

  const handleBuyCarnet = () => {
    const newDate = new Date();

    const newTransaction = {
      transactionDate: newDate,
      clientID: {
        id: clientId,
      },
      carnetID: chosenMembership,
    };

    const chosenMembershipObject = memberships.filter((memb) => memb.id === chosenMembership);
    const chosenMembershipPrice = chosenMembershipObject[0].price;

    axios
      .patch(
        `https://springboot-385918.oa.r.appspot.com/api/client/${clientId}?amount=${chosenMembershipPrice}`,
      )
      .then(() => {
        axios
          .post('https://springboot-385918.oa.r.appspot.com/api/transaction', newTransaction, {
            headers: { Authorization: `Bearer ${token}` },
          })
          .then(() => {
            setStateHandler(Math.random());
            setShowModal(false);
            NotificationManager.success('Membership bought successfully!');
          })
          .catch((err) => {
            NotificationManager.error(`Couldnt buy membership - ${err}`);
          });
      })
      .catch(() => {
        NotificationManager.error('Cannot change balance, try again later');
      });
  };

  return (
    <div>
      <section className="flex w-fit flex-col rounded-2xl  bg-gray-50 p-2.5 text-sm">
        {membership.length === 0 ? (
          <div>
            <p>Client doesn't have active membership</p>
            <button
              type="button"
              onClick={() => setShowModal(true)}
              className="mt-3 w-full rounded-lg bg-red-600 px-5 py-1.5 text-center text-sm font-medium text-white hover:bg-red-500"
            >
              Activate membership
            </button>
          </div>
        ) : (
          <div>
            <div className="mb-5">Membership info: </div>
            <div>Current carnet: {carnet.name}</div>
            <div>Date of purchase: {finalStart}</div>
            <div>Date of expiration: {finalEnd}</div>
          </div>
        )}
      </section>
      <ModalLogin
        isVisible={showModal}
        onClose={() => {
          setShowModal(false);
        }}
        title="Activate membership"
      >
        <select
          id="categorySelect"
          onChange={(e) => {
            setChosenMembership(e.target.value);
          }}
          className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-lg text-gray-900 focus:border-teal-900 focus:ring-teal-900 disabled:cursor-not-allowed disabled:opacity-50"
        >
          <option value="">Select a category</option>
          {memberships.map((membershipx) => (
            <option key={membershipx.id} value={membershipx.id}>
              {membershipx.name} - {membershipx.price}
            </option>
          ))}
        </select>
        <button
          type="button"
          onClick={() => handleBuyCarnet()}
          className="mt-3 w-full rounded-lg bg-red-600 px-5 py-1.5 text-center text-sm font-medium text-white hover:bg-red-500"
        >
          Activate
        </button>
      </ModalLogin>
    </div>
  );
};

export default ClientCarnet;
