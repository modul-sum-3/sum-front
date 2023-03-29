import Navbar from "../components/Navbar";

const MainTemplate = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-200">
      <Navbar />
      <div className="flex-grow max-w-screen-xl self-center w-full px-2 sm:px-4"></div>
    </div>
  );
};

export default MainTemplate;
