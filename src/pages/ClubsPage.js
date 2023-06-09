import { useEffect, useState } from 'react';
import axios from 'axios';
import ClubRow from '../components/Site/ClubRow';
import MainTemplate from '../templates/MainTemplate';

const Clubs = () => {
  const [clubs, setClubs] = useState([]);
  const [filteredClubs, setFilteredClubs] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    axios.get('https://springboot-385918.oa.r.appspot.com/api/clubs').then((res) => {
      setClubs(res.data);
      setFilteredClubs(res.data);
    });
  }, []);

  useEffect(() => {
    if (filter !== '') {
      const filteredByCity = clubs.filter((club) =>
        club.city.toLowerCase().includes(filter.toLowerCase()),
      );
      const filteredByCategory = clubs.filter((club) =>
        club.rooms.some((room) =>
          room.categoryList.some((category) => category.name.includes(filter)),
        ),
      );
      const filteredClubs2 = [...filteredByCity, ...filteredByCategory];
      setFilteredClubs(filteredClubs2);
    } else {
      setFilteredClubs(clubs);
    }
  }, [filter, clubs]);

  return (
    <div>
      <MainTemplate>
        <div className="flex flex-row items-center ">
          <div className="clubs__header w-[50%]">
            <h2 className="text-4xl font-bold text-primary">Our clubs</h2>
            <p className="my-4 text-2xl text-white">
              Check which facility is located in your area and choose something for yourself! In our
              offer you will find a wide range of workouts tailored to your personal preferences.
            </p>
          </div>
          <div className="block w-1/2">
            <input
              type="text"
              placeholder="Find your Club by city or training available!"
              className="w-full"
              onChange={(e) => {
                setFilter(e.target.value);
                if (e.target.value.length === 0) {
                  setFilter('');
                }
              }}
            />
          </div>
        </div>
        <div className="clubs__list mt-12 flex flex-col gap-6">
          {filteredClubs.map(({ id, city, location, street, zip, openTime, closeTime, rooms }) => (
            <ClubRow
              clubId={id}
              city={city}
              location={location}
              street={street}
              zip={zip}
              opens={openTime}
              closes={closeTime}
              rooms={rooms}
            />
          ))}
        </div>
      </MainTemplate>
    </div>
  );
};

export default Clubs;
