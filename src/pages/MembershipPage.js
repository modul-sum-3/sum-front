// import { useState } from 'react';
import { NotificationContainer } from 'react-notifications';
import MembershipCard from '../components/Site/MembershipCard';
import { cards } from '../data/cards';
import MainTemplate from '../templates/MainTemplate';

const Membership = () => {
  // const [membership, setMembership] = useState({});

  // axios
  //   .get('')
  //   .then((res) => setMembership(res.data))
  //   .catch(() => NotificationManager.error('Couldnt get data'));

  return (
    <div>
      <MainTemplate>
        <div className="flex flex-col items-center">
          <h3>Our pricing</h3>
          <h1 className="font-bold text-primary ">Choose Your Best Plan</h1>
          <p>Choose the plan that suits you</p>
        </div>
        <div className="my-6 flex gap-4">
          {cards.map(({ title, price, benefits }) => (
            <MembershipCard title={title} price={price} benefits={benefits} />
          ))}
        </div>
      </MainTemplate>
      <NotificationContainer />
    </div>
  );
};
export default Membership;
