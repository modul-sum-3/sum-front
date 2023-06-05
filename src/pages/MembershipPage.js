// import { useState } from 'react';
import { NotificationContainer, NotificationManager } from 'react-notifications';
import { useState, useEffect } from 'react';
import axios from 'axios';
import MembershipCard from '../components/Site/MembershipCard';
import MainTemplate from '../templates/MainTemplate';

const Membership = () => {
  const [membership, setMembership] = useState([]);

  useEffect(() => {
    axios
      .get('https://springboot-385918.oa.r.appspot.com/api/carnets')
      .then((res) => {
        setMembership(res.data);
      })
      .catch((e) => {
        NotificationManager.error(e);
      });
  }, []);

  return (
    <div>
      <MainTemplate>
        <div className="mt-12 flex flex-col items-center text-white">
          <p className="text-2xl">Our pricing</p>
          <h1 className="text-4xl font-bold text-primary">Choose Your Best Plan</h1>
          <p className="text-2xl">Choose the plan that suits you</p>
        </div>
        <div className="mt-20 flex gap-4">
          {membership.map(({ id, name, price, description }) => (
            <MembershipCard
              title={name}
              price={price}
              description={description}
              membershipId={id}
            />
          ))}
        </div>
      </MainTemplate>
      <NotificationContainer />
    </div>
  );
};
export default Membership;
