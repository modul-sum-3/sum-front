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
      })
      .catch((e) => {
        console.log(e);
      });
  }, [club]);

  const handleAcceptTraining = (training) => {
    const url = `http://springboot-385918.oa.r.appspot.com/api/training/${training.id}/confirmed?isConfirmed=true`;

    axios
      .put(url)
      .then((res) => {
        console.log('Training confirmed:', res.data);

        // Remove the accepted training from the events state
        setEvents((prevEvents) => prevEvents.filter((event) => event.id !== training.id));
      })
      .catch((error) => {
        // Handle error, such as showing an error message or logging the error
      });
  };

  return (
    <div className="flex flex-col justify-center text-black">
      <div className="flex justify-center text-2xl">Trainings to accept:</div>
      <div className="mx-16 mt-8 grid grid-cols-2 gap-4">
        {events.length > 0
          ? events.map((event) => (
              <div
                className=" rounded-lg border border-gray-300 bg-gray-50 p-3 text-sm"
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
                  <div>Start date: {event.startDate}</div>
                  <div>Duration time: {event.duration}</div>
                  <div>Room: {event.room.id}</div>
                  <div>No. of people: {event.amount}</div>
                </div>
                <button
                  type="button"
                  className="mt-3 w-full rounded-lg bg-red-600 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-600"
                  onClick={() => handleAcceptTraining(event)}
                >
                  Accept
                </button>
              </div>
            ))
          : null}
      </div>
      {events.length === 0 ? (
        <div className="flex justify-center text-lg">No trainings to accept</div>
      ) : null}
    </div>
  );
};

export default ConfirmTrainings;
