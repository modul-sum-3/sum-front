/* eslint-disable tailwindcss/no-contradicting-classname */
import clsx from 'clsx';
import Navbar from '../components/Site/Navbar';

const MainTemplate = ({ children, dark = 'bg-black/50' }) => {
  return (
    <div className="">
      <section
        className={clsx(
          `flex min-h-full flex-col bg-[url("assets/jumbo_bg.jpg")] bg-center bg-no-repeat bg-blend-multiply ${dark} `,
        )}
      >
        <Navbar className="self-end" />
        <div className="min-h-screen max-w-screen-xl grow self-center">{children}</div>
      </section>
    </div>
  );
};

export default MainTemplate;
