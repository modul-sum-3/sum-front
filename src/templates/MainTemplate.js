/* eslint-disable tailwindcss/no-contradicting-classname */
import clsx from 'clsx';
import Navbar from '../components/Site/Navbar';

const MainTemplate = ({ children, dark = 'bg-black/50' }) => {
  return (
    <div className="">
      <section
        className={clsx(
          `flex flex-col bg-[url("assets/jumbo_bg.jpg")] bg-center bg-no-repeat bg-blend-multiply ${dark} h-screen`,
        )}
      >
        <Navbar className="self-end" color="gray-100" />
        <div className="h-screen w-full max-w-screen-xl grow self-center">{children}</div>
      </section>
    </div>
  );
};

export default MainTemplate;
