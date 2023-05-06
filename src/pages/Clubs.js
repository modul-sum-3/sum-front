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
        <div className="clubs__list flex max-w-full flex-col">
          {clubsList.map(({ city, location }) => (
            <ClubRow city={city} location={location} />
          ))}
        </div>
      </MainTemplate>
    </div>
  );
};
export default Clubs;
