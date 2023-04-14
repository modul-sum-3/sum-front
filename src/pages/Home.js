import Jumbotron from '../components/Jumbotron';
import Navbar from '../components/Navbar';

const Home = () => {
  return (
    <div className="flex h-screen flex-col bg-gray-200">
      <Navbar />
      <Jumbotron />
    </div>
  );
};
export default Home;
