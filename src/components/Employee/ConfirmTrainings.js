import { NotificationManager } from 'react-notifications';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { FaceSmileIcon } from '@heroicons/react/24/solid';
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
    <div className="relative flex flex-col justify-center text-black">
      <div className="text-center text-2xl font-semibold">Trainings that require approval:</div>
      {events.length === 0 ? (
        <div className="absolute left-1/2 top-1/2 my-auto flex w-full -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-8">
          <h1>There are no trainings to accept</h1>
          <FaceSmileIcon className="h-24 w-24 text-gray-500" />
        </div>
      ) : null}
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
                    className="h-fit rounded-lg border border-gray-300 bg-gray-50 p-3 font-medium"
                    key={event.id}
                  >
                    <p className="font-lg mb-2 text-center">
                      Trainer: {event.trainer.first_name} {event.trainer.last_name}
                    </p>

                    <p className="font-lg mb-2 mt-4 text-center">Training:</p>
                    <div className="ml-2 flex flex-col">
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
                      className="mt-3 w-full rounded-lg bg-red-600 p-2 text-center font-medium text-white transition-colors hover:bg-red-800"
                      onClick={() => handleAcceptTraining(event)}
                    >
                      Approve
                    </button>
                  </div>
                );
              })
            : null}
        </div>
      </div>
    </div>
  );
};

export default ConfirmTrainings;
