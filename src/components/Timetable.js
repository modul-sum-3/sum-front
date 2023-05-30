import Kalend, { CalendarView } from 'kalend';

const events = [
  {
    id: 1,
    startAt: '2023-05-21T18:00:00.000Z',
    endAt: '2023-05-21T19:00:00.000Z',
    timezoneStartAt: 'Europe/Berlin',
    summary: 'test',
    color: 'blue',
    calendarID: 'work',
  },
  {
    id: 2,
    startAt: '2023-05-21T18:00:00.000Z',
    endAt: '2023-05-21T19:00:00.000Z',
    timezoneStartAt: 'Europe/Berlin',
    summary: 'test',
    color: 'blue',
  },
  {
    id: 3,
    startAt: '2023-05-12T18:00:00.000Z',
    endAt: '2023-05-12T19:00:00.000Z',
    timezoneStartAt: 'Europe/Berlin',
    summary: 'test',
    color: 'blue',
  },
];

const Timetable = () => {
  return (
    <div className="h-[700px] w-[1200px] rounded-xl bg-white">
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
  );
};

export default Timetable;
