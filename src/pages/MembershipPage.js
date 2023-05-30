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
        <div className="mt-12 flex flex-col items-center text-white">
          <p className="text-2xl">Our pricing</p>
          <h1 className="text-4xl font-bold text-primary">Choose Your Best Plan</h1>
          <p className="text-2xl">Choose the plan that suits you</p>
        </div>
        <div className="mt-20 flex items-center gap-4 self-center">
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
