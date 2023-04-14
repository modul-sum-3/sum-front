import PassCard from '../components/PassCard';
import { cards } from '../data/cards';
import MainTemplate from '../templates/MainTemplate';

const Pass = () => (
  <div>
    <MainTemplate>
      <div className="flex flex-col items-center">
        <h2>Our pricing</h2>
        <h1>Choose Your Best Plan</h1>
        <p>Choose the plan that suits you</p>
      </div>
      <div className="my-6 flex gap-4">
        {cards.map(({ title, price, benefits }) => (
          <PassCard title={title} price={price} benefits={benefits} />
        ))}
      </div>
    </MainTemplate>
  </div>
);
export default Pass;
