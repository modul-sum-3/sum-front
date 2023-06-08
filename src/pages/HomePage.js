/* eslint-disable tailwindcss/no-contradicting-classname */
// import Jumbotron from '../components/Site/Jumbotron';
import MainTemplate from '../templates/MainTemplate';

const Home = () => {
  return (
    <MainTemplate>
      <div className="absolute left-1/2 top-1/2 w-full -translate-x-1/2 -translate-y-1/2 text-center text-7xl uppercase text-white">
        Reach your goals at Fitnest
      </div>
    </MainTemplate>
  );
};
export default Home;
