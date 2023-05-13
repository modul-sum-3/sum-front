import Footer from '../components/Site/Footer';
import Jumbotron from '../components/Site/Jumbotron';
import Navbar from '../components/Site/Navbar';

const Home = () => {
  return (
    <div>
      <div className="flex h-screen flex-col bg-gray-200">
        <Navbar />
        <Jumbotron />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};
export default Home;
