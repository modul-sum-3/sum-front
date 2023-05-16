import clsx from 'clsx';
import Navbar from '../components/Site/Navbar';

const MainTemplate = ({ children, bg = '' }) => {
  return (
    <div className="flex min-h-screen flex-col bg-gray-200">
      <Navbar />

      <div className={clsx('w-full max-w-screen-xl grow self-center px-2 py-16 sm:px-4', bg)}>
        {children}
      </div>
    </div>
  );
};

export default MainTemplate;
