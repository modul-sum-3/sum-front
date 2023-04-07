import Jumbotron from "../components/Jumbotron";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <div className="h-screen flex flex-col bg-gray-200">
      <Navbar />
      <Jumbotron />
    </div>
  );
};
export default Home;
