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
      const filteredCategories = categories.filter((item) => item.id === parseInt(categoryR, 10));
      if (filteredCategories.length > 0) {
        const filteredClubs = filteredCategories[0].roomList.map((room) => room.club);
        setClubs(
          filteredClubs.filter(
            (obj, index, self) => index === self.findIndex((el) => el.name === obj.name),
          ),
        );
      }
    }
  }, [categoryR, categories]);

  useEffect(() => {
    if (clubR) {
      axios
        .get('https://springboot-385918.oa.r.appspot.com/api/rooms')
        .then((res) => {
          const notFiltered = res.data;
          setRooms(notFiltered.filter((item) => item.club.id === Number(clubR)));
        })
        .catch((e) => {
          NotificationManager.error(`Cannot get categories - ${e}`);
        });
    }
  }, [clubR, clubs]);
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
    datetimeObj.setHours(datetimeObj.getHours() + 3);

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
    <div className="flex h-full items-center justify-center">
      <form className="flex w-3/4 flex-col gap-3" onSubmit={handleSubmit}>
        <div className="flex flex-row gap-2">
          <select
            id="categorySelect"
            onChange={handleCategoryChange}
            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary focus:ring-primary disabled:cursor-not-allowed disabled:opacity-50"
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
            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary focus:ring-primary disabled:cursor-not-allowed disabled:opacity-50"
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
            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary focus:ring-primary disabled:cursor-not-allowed disabled:opacity-50"
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
            onChange={(e) => setTime(e.target.value)}
            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-center text-sm text-gray-900 focus:border-primary focus:ring-primary disabled:cursor-not-allowed disabled:opacity-50"
          />
          <input
            placeholder="Date"
            id="dateInput"
            type="date"
            required
            onChange={(e) => setDate(e.target.value)}
            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary focus:ring-primary disabled:cursor-not-allowed disabled:opacity-50"
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
            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary focus:ring-primary disabled:cursor-not-allowed disabled:opacity-50"
          />

          <input
            placeholder="Duration"
            id="duration"
            type="number"
            min={30}
            required
            onChange={(e) => setDuration(e.target.value)}
            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary focus:ring-primary disabled:cursor-not-allowed disabled:opacity-50"
          />
        </div>
        <button
          type="submit"
          className="rounded-lg bg-primary px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-hover focus:outline-none focus:ring-4 focus:ring-primary"
        >
          Send to approval
        </button>
      </form>
    </div>
  );
};

export default AddTraining;
