import MembershipCard from '../components/MembershipCard';
import { cards } from '../data/cards';
import MainTemplate from '../templates/MainTemplate';

const Membership = () => (
  <div>
    <MainTemplate>
      <div className="flex flex-col items-center">
        <h3>Our pricing</h3>
        <h1 className="font-bold text-primary shadow-green-100 drop-shadow-md">
          Choose Your Best Plan
        </h1>
        <p>Choose the plan that suits you</p>
      </div>
      <div className="my-6 flex gap-4">
        {cards.map(({ title, price, benefits }) => (
          <MembershipCard title={title} price={price} benefits={benefits} />
        ))}
      </div>
    </MainTemplate>
  </div>
);
export default Membership;
