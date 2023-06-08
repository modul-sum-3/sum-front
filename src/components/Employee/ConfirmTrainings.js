import { NotificationManager } from 'react-notifications';
import axios from 'axios';
import { useEffect, useState } from 'react';
import user from '../../data/store';

const ConfirmTrainings = () => {
  const club = user((state) => state.club);
  const [events, setEvents] = useState([]);

  useEffect(() => {
    axios
      .get(`https://springboot-385918.oa.r.appspot.com/api/training/club/${club.id}`)
      .then((res) => {
        const eventsBeforeFilter = res.data;
        const eventsFiltered = eventsBeforeFilter.filter((obj) => obj.isConfirmed === false);

        setEvents(eventsFiltered);
      });
  }, [club]);

  const handleAcceptTraining = (training) => {
    const url = `https://springboot-385918.oa.r.appspot.com/api/training/${training.id}/confirmed?isConfirmed=true`;

    axios
      .put(url)
      .then(() => {
        setEvents((prevEvents) => prevEvents.filter((event) => event.id !== training.id));
      })
      .catch((error) => {
        NotificationManager.error(error);
      });
  };

  return (
    <div className="flex flex-col justify-center text-black">
      <div className="text-center text-2xl">Trainings to accept:</div>
      <div className="h-[85vh] overflow-auto">
        <div className="mx-16 mt-8 grid grid-cols-2 gap-4 ">
          {events.length > 0
            ? events.map((event) => {
                const newDate = new Date(event.startDate);
                newDate.setHours(newDate.getHours() + 2);
                const updatedDate = newDate.toISOString();
                const date = updatedDate.slice(0, 10);
                const time = updatedDate.slice(11, 16);
                const final = `${date} - ${time}`;
                return (
                  <div
                    className="h-fit rounded-lg border border-gray-300 bg-gray-50 p-3 text-sm"
                    key={event.id}
                  >
                    <p className="mb-1">Trainer:</p>
                    <div className="flex flex-row items-center justify-center">
                      <div> First Name: {event.trainer.first_name}</div>
                      <div className="ml-4"> Last Name: {event.trainer.last_name}</div>
                    </div>
                    <p className="mb-1 mt-2">Training:</p>
                    <div className="flex flex-col items-center justify-center">
                      <div>Category: {event.category.name}</div>
                      <div>Start date: {final}</div>
                      <div>Duration time: {event.duration}</div>
                      <div>
                        Room: {event.room.id} - {event.room.type}
                      </div>
                      <div>No. of people: {event.amount}</div>
                    </div>
                    <button
                      type="button"
                      className="mt-3 w-full rounded-lg bg-red-600 px-5 py-2.5 text-center text-sm font-medium text-white transition-colors hover:bg-red-800"
                      onClick={() => handleAcceptTraining(event)}
                    >
                      Accept
                    </button>
                  </div>
                );
              })
            : null}
        </div>
      </div>
      {events.length === 0 ? (
        <div className="flex justify-center text-lg">No trainings to accept</div>
      ) : null}
    </div>
  );
};

export default ConfirmTrainings;
