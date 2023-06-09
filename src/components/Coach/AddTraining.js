import axios from 'axios';
import { useEffect, useState } from 'react';
import { NotificationManager } from 'react-notifications';
import user from '../../data/store';

const AddTraining = () => {
  const CoachId = user((state) => state.id);
  const [categoryR, setCategory] = useState(null);
  const [categories, setCategories] = useState([]);
  const [clubR, setClub] = useState(null);
  const [clubs, setClubs] = useState([]);
  const [roomR, setRoom] = useState(null);
  const [rooms, setRooms] = useState([]);
  const [isSecondSelectDisabled, setIsSecondSelectDisabled] = useState(true);
  const [isThirdSelectDisabled, setIsThirdSelectDisabled] = useState(true);
  const [time, setTime] = useState();
  const [date, setDate] = useState();
  const [amountR, setAmount] = useState();
  const [durationR, setDuration] = useState();

  useEffect(() => {
    axios
      .get('https://springboot-385918.oa.r.appspot.com/api/categorys')
      .then((res) => {
        setCategories(res.data);
      })
      .catch((e) => {
        NotificationManager.log(e);
      });
  }, []);

  useEffect(() => {
    if (categoryR) {
      axios
        .get('https://springboot-385918.oa.r.appspot.com/api/clubs')
        .then((res) => {
          const notFiltered = res.data;
          const filtered = notFiltered.filter((club) =>
            club.rooms.some((room) =>
              room.categoryList.some((category) => category.id === Number(categoryR)),
            ),
          );
          setClubs(filtered);
        })
        .catch((e) => {
          NotificationManager.error(`Cannot get categories - ${e}`);
        });
      // const filteredCategories = categories.filter((item) => item.id === parseInt(categoryR, 10));
      // if (filteredCategories.length > 0) {
      //   const filteredClubs = filteredCategories[0].roomList.map((room) => room.club);
      //   setClubs(
      //     filteredClubs.filter(
      //       (obj, index, self) => index === self.findIndex((el) => el.name === obj.name),
      //     ),
      //   );
      // }
    }
  }, [categoryR, categories]);

  useEffect(() => {
    if (clubR) {
      const filterClub = clubs.filter((club) => club.id === Number(clubR));

      const notFilteredRooms = filterClub.map((item) => item.rooms).flat();

      setRooms(
        notFilteredRooms.filter((room) =>
          room.categoryList.some((category) => category.id === Number(categoryR)),
        ),
      );
    }
  }, [clubR, clubs, categoryR]);

  const handleClubChange = (event) => {
    if (event.target.value === '') {
      setIsThirdSelectDisabled(true);
      const selectRoom = document.getElementById('roomSelect');
      selectRoom.selectedIndex = 0;
      setRoom(null);
      setClub(null);
      return;
    }
    setClub(event.target.value);
    setIsThirdSelectDisabled(false);
  };

  const handleCategoryChange = (event) => {
    if (event.target.value === '') {
      setIsSecondSelectDisabled(true);
      const selectClub = document.getElementById('clubSelect');
      selectClub.selectedIndex = 0;
      setCategory(null);
      handleClubChange(event);
      return;
    }
    setCategory(event.target.value);
    setIsSecondSelectDisabled(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const dateTimeStr = `${date} ${time}`;
    const datetimeObj = new Date(dateTimeStr);

    // Adjust the time zone offset to match the desired time zone
    datetimeObj.setHours(datetimeObj.getHours() + 1);
    const newDateTimeStrStart = datetimeObj.toISOString().replace(/Z$/, '+01:00');
    const dateWithoutMilliseconds = newDateTimeStrStart.replace('.000', '');
    // Clone the datetimeObj before modifying it to calculate the end time
    // const datetimeObjEnd = new Date(datetimeObj);
    // datetimeObjEnd.setMinutes(datetimeObjEnd.getMinutes() + durationR);
    // const newDateTimeStrEnd = datetimeObjEnd.toISOString().replace(/Z$/, '+1:00');

    const newTraining = {
      clients: null,
      room: {
        id: Number(roomR),
      },
      trainer: {
        id: CoachId,
      },
      category: {
        id: Number(categoryR),
      },
      club: {
        id: Number(clubR),
      },
      duration: durationR,
      amount: amountR,
      startDate: dateWithoutMilliseconds,
      // endTime: newDateTimeStrEnd,
    };

    axios
      .post('https://springboot-385918.oa.r.appspot.com/api/training', newTraining)
      .then(() => {
        NotificationManager.info('Successfully send to approval');
      })
      .catch((err) => {
        NotificationManager.error(`Unsuccessful operation ${err}`);
      });

    e.target.reset();
    setClub('');
    setCategory('');
    setRoom('');
    setTime(null);
    setDate(null);
    setAmount(null);
    setDuration(null);
  };

  return (
    <div className="relative h-full">
      <p className="text-center text-2xl font-semibold">Enter training information:</p>
      <div className="absolute left-1/2 top-1/2 w-full -translate-x-1/2 -translate-y-1/2">
        <form className="flex w-full flex-col gap-3" onSubmit={handleSubmit}>
          <div className="flex flex-row gap-2">
            <select
              id="categorySelect"
              onChange={handleCategoryChange}
              className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-lg text-gray-900 focus:border-teal-700 focus:ring-teal-700 disabled:cursor-not-allowed disabled:opacity-50"
            >
              <option value="">Select a category</option>
              {categories.map((category) => (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              ))}
            </select>
            <select
              id="clubSelect"
              disabled={isSecondSelectDisabled}
              onChange={handleClubChange}
              className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-lg text-gray-900 focus:border-teal-700 focus:ring-teal-700 disabled:cursor-not-allowed disabled:opacity-50"
            >
              <option value="">Select a club</option>
              {clubs.map((club) => (
                <option key={club.id} value={club.id}>
                  {club.name}
                </option>
              ))}
            </select>
            <select
              id="roomSelect"
              disabled={isThirdSelectDisabled}
              onChange={(event) => setRoom(event.target.value)}
              className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-lg text-gray-900 focus:border-teal-700 focus:ring-teal-700 disabled:cursor-not-allowed disabled:opacity-50"
            >
              <option value="">Select a room</option>
              {rooms.map((room) => (
                <option key={room.id} value={room.id}>
                  {room.type}
                </option>
              ))}
            </select>
          </div>
          <div className="flex flex-row gap-2">
            <input
              placeholder="Time"
              id="time"
              type="time"
              required
              onBlur={(e) => setTime(e.target.value)}
              className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-center text-lg text-gray-900 focus:border-teal-700 focus:ring-teal-700 disabled:cursor-not-allowed disabled:opacity-50"
            />
            <input
              placeholder="Date"
              id="dateInput"
              type="date"
              defaultValue="13-06-2023"
              required
              onBlur={(e) => {
                setDate(e.target.value);
              }}
              className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-lg text-gray-900 focus:border-teal-700 focus:ring-teal-700 disabled:cursor-not-allowed disabled:opacity-50"
            />
          </div>
          <div className="flex flex-row items-center gap-2">
            <input
              placeholder="Amount of people"
              id="amount"
              type="number"
              min={5}
              required
              onChange={(e) => setAmount(e.target.value)}
              className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-lg text-gray-900 focus:border-teal-700 focus:ring-teal-700 disabled:cursor-not-allowed disabled:opacity-50"
            />

            <input
              placeholder="Duration"
              id="duration"
              type="number"
              min={30}
              required
              onChange={(e) => setDuration(e.target.value)}
              className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-lg text-gray-900 focus:border-teal-700 focus:ring-teal-700 disabled:cursor-not-allowed disabled:opacity-50"
            />
          </div>
          <button
            type="submit"
            className="rounded-lg bg-teal-400 px-5 py-2.5 text-center text-lg font-medium text-white transition-colors hover:bg-teal-700"
          >
            Send to approval
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddTraining;
