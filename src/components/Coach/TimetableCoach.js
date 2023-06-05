import Kalend, { CalendarView } from 'kalend';
import { NotificationManager } from 'react-notifications';
import axios from 'axios';
import { useEffect, useState } from 'react';

const TimetableCoach = () => {
  const [clubId, setClubId] = useState(1);
  const [events, setEvents] = useState({});
  const [clubs, setClubs] = useState([]);

  useEffect(() => {
    axios
      .get('https://springboot-385918.oa.r.appspot.com/api/clubs')
      .then((res) => {
        setClubs(res.data);
      })
      .catch((e) => {
        NotificationManager.error(`Cannot get clubs - ${e}`);
      });
  }, []);

  useEffect(() => {
    axios
      .get(`https://springboot-385918.oa.r.appspot.com/api/training/club/${clubId}`)
      .then((res) => {
        const eventsBeforeMap = res.data;
        const eventsFiltered = eventsBeforeMap.filter((obj) => obj.isConfirmed === true);
        const eventsMapped = eventsFiltered.map(
          ({ id, startDate, endTime, category, trainer }) => ({
            id,
            startAt: startDate,
            endAt: endTime,
            timezoneStartAt: 'Europe/Berlin',
            summary: `${trainer.last_name} ${category.name}`,
            color: 'blue',
            calendarID: 'kalend',
          }),
        );

        setEvents(eventsMapped);
      })
      .catch((e) => {
        NotificationManager.error(`Cannot get user - ${e}`);
      });
  }, [clubId]);

  const handleClubChange = (event) => {
    setClubId(event.target.value);
  };

  return (
    <div>
      <div className="mb-3 flex items-center justify-center">
        Change club
        <select
          id="clubSelect"
          value={clubId}
          onChange={handleClubChange}
          className="ml-5 rounded-xl border-gray-300 bg-white"
        >
          {clubs.map((club) => (
            <option key={club.id} value={club.id}>
              {club.name}
            </option>
          ))}
        </select>
      </div>
      <div className="h-[825px] w-[950px] rounded-xl bg-white">
        <Kalend
          initialDate={new Date().toISOString()}
          initialView={CalendarView.WEEK}
          events={events}
          autoScroll
          hourHeight={80}
          timeFormat="24"
          weekDayStart="Monday"
          language="en"
          disabledDragging
          colors={{
            light: {
              primaryColor: 'blue',
            },
          }}
        />
      </div>
    </div>
  );
};

export default TimetableCoach;
