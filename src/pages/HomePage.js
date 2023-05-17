/* eslint-disable tailwindcss/no-contradicting-classname */
// import Jumbotron from '../components/Site/Jumbotron';
import MainTemplate from '../templates/MainTemplate';

const Home = () => {
  return (
    <MainTemplate>
      <div className="flex min-h-screen max-w-screen-xl grow items-center">
        <div className="h-full  text-7xl uppercase text-white">Reach your goals at Fitnest</div>
      </div>
    </MainTemplate>
  );
};
export default Home;
