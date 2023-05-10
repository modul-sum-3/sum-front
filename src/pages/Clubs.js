import ClubRow from '../components/ClubRow';
import { clubsList } from '../data/clubsList';
import MainTemplate from '../templates/MainTemplate';

const Clubs = () => {
  return (
    <div>
      <MainTemplate>
        <div className="clubs__header w-[50%]">
          <h2 className="text-4xl font-bold text-primary">Our clubs</h2>
          <p className="my-4 text-lg text-gray-600">
            Check which facility is located in your area and choose something for yourself! In our
            offer you will find a wide range of workouts tailored to your personal preferences.
          </p>
        </div>
        <div className="clubs__list mt-12 flex max-w-full flex-col gap-6">
          {clubsList.map(({ id, city, location }) => (
            <ClubRow id={id} city={city} location={location} />
          ))}
        </div>
      </MainTemplate>
    </div>
  );
};

export default Clubs;
