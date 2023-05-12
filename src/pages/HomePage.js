import Footer from '../components/Footer';
import Jumbotron from '../components/Jumbotron';
import Navbar from '../components/Navbar';

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
