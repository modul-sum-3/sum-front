import Kalend, { CalendarView } from 'kalend'; // import component
import 'kalend/dist/styles/index.css'; // import styles

const Timetable = () => {
  const selectedView = true;
  const onPageChange = false;

  const onEventClick = () => {
    console.log('1');
  };
  const onNewEventClick = () => {
    console.log('2');
  };
  const onSelectView = () => {
    console.log('3');
  };

  return (
    <Kalend
      onEventClick={onEventClick}
      onNewEventClick={onNewEventClick}
      events={[]}
      initialDate={new Date().toISOString()}
      hourHeight={60}
      initialView={CalendarView.WEEK}
      disabledViews={[CalendarView.DAY]}
      onSelectView={onSelectView}
      selectedView={selectedView}
      onPageChange={onPageChange}
      timeFormat="24"
      weekDayStart="Monday"
      calendarIDsHidden={['work']}
      language="en"
    />
  );
};

export default Timetable;
