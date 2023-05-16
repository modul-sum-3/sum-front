/* eslint-disable tailwindcss/no-contradicting-classname */
import Navbar from '../components/Site/Navbar';

const MainTemplate = ({ children }) => {
  return (
    <div className="">
      <section className="flex min-h-full flex-col  bg-black/50 bg-[url('assets/jumbo_bg.jpg')] bg-center bg-no-repeat bg-blend-multiply">
        <Navbar className="self-end" />
        <div className="min-h-screen max-w-screen-xl grow self-center">{children}</div>
      </section>
    </div>
  );
};

export default MainTemplate;
