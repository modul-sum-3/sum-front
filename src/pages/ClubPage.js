import Kalend, { CalendarView } from 'kalend';
import { useParams } from 'react-router-dom';
import { NotificationManager } from 'react-notifications';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Timetable from '../components/Timetable';
import MainTemplate from '../templates/MainTemplate';

const ClubPage = () => {
  const { id: clubId } = useParams();
  const [events, setEvents] = useState([]);

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

  return (
    <MainTemplate>
      <div className="mt-14 h-[700px] w-[1200px] rounded-xl bg-white">
        <Kalend
          initialDate={new Date().toISOString()}
          initialView={CalendarView.WEEK}
          events={events}
          timeFormat="24"
          weekDayStart="Monday"
          language="en"
          disabledDragging
        />
      </div>
    </MainTemplate>
  );
};

export default ClubPage;
