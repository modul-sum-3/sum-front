import Navbar from '../components/Navbar';

const MainTemplate = ({ children }) => {
  return (
    <div className="flex min-h-screen flex-col bg-gray-200">
      <Navbar />
      <div className="w-full max-w-screen-xl grow self-center px-2 py-16 sm:px-4">{children}</div>
    </div>
  );
};

export default MainTemplate;
