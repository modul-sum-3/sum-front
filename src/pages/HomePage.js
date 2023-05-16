/* eslint-disable tailwindcss/no-contradicting-classname */
// import Jumbotron from '../components/Site/Jumbotron';
import Navbar from '../components/Site/Navbar';

const Home = () => {
  return (
    <div className="h-screen">
      <section className="flex h-full flex-col items-end bg-gray-500 bg-[url('assets/jumbo_bg.jpg')] bg-center bg-no-repeat bg-blend-multiply">
        <Navbar />
      </section>
    </div>
  );
};
export default Home;
