import { NotificationManager } from 'react-notifications';
import axios from 'axios';
import { useState, useEffect } from 'react';
import user from '../../data/store';

const HomepageCoach = () => {
  const id = user((state) => state.id);
  const [events, setEvents] = useState([]);

  useEffect(() => {
    axios
      .get(`https://springboot-385918.oa.r.appspot.com/api/training/trainer/${id}`)
      .then((res) => {
        setEvents(res.data);
      })
      .catch((e) => {
        NotificationManager.error(`Cannot get events - ${e}`);
      });
  }, [id]);

  return (
    <section className="">
      <h2>My trainings:</h2>
      <div className="h-[85vh] overflow-auto">
        <div className="mx-16 mt-8 grid grid-cols-2 gap-4">
          {events.map((training) => {
            const newDate = new Date(training.startDate);
            newDate.setHours(newDate.getHours() + 2);
            const updatedDate = newDate.toISOString();
            const date = updatedDate.slice(0, 10);
            const time = updatedDate.slice(11, 16);
            const final = `${date} - ${time}`;

            return (
              <div className=" rounded-lg border border-gray-300 bg-gray-50 p-3 text-sm">
                <div className="mb-3 text-center">EXAMPLE TRAINING</div>
                <div>Category: {training.category.name}</div>
                <div>Club name: {training.club.name} </div>
                <div>Start date: {final}</div>
                <div>Duration time: {training.duration}</div>
                <div>
                  Room: {training.room.id} - {training.room.type}
                </div>
                <div>Confirmed: {training.isConfirmed.toString()}</div>
                <button
                  type="button"
                  className="mt-3 w-full rounded-lg bg-red-600 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-600"
                >
                  Sign off
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HomepageCoach;
