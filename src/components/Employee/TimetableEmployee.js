import Kalend, { CalendarView } from 'kalend';
import { NotificationManager } from 'react-notifications';
import axios from 'axios';
import { useEffect, useState } from 'react';
import user from '../../data/store';

const TimetableEmployee = () => {
  const club = user((state) => state.club);
  const [events, setEvents] = useState({});

  useEffect(() => {
    axios
      .get(`https://springboot-385918.oa.r.appspot.com/api/training/club/${club.id}`)
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
  }, [club]);

  return (
    <div>
      <div className="h-[850px] w-[950px] rounded-xl bg-white">
        <Kalend
          initialDate={new Date().toISOString()}
          initialView={CalendarView.WEEK}
          events={events}
          timeFormat="24"
          autoScroll
          hourHeight={80}
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

export default TimetableEmployee;
