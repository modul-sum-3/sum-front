import { NotificationManager } from 'react-notifications';
import axios from 'axios';
import { useState, useEffect } from 'react';
import user from '../../data/store';
import ModalLogin from '../Site/ModalLogin';

const HomepageCoach = () => {
  const id = user((state) => state.id);
  const [showModal, setShowModal] = useState(false);
  const [currentEvent, setCurrentEvent] = useState([]);
  const [stateHandler, setStateHandler] = useState();
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
  }, [id, stateHandler]);

  const handleSignOff = (trainingID) => {
    axios
      .delete(`http://springboot-385918.oa.r.appspot.com/api/training/${trainingID}`)
      .then(() => {
        setStateHandler(Math.random());
        setShowModal(false);
      })
      .catch((e) => {
        NotificationManager.error(`Cannot sign off from training - ${e}`);
      });
  };

  return (
    <section className="">
      <h2 className="text-center">My trainings:</h2>
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
                <div className="mb-3 text-center">{training.category.name}</div>
                <div>Club name: {training.club.name} </div>
                <div>Start date: {final}</div>
                <div>Duration time: {training.duration}</div>
                <div>
                  Room: {training.room.id} - {training.room.type}
                </div>
                <div>Confirmed: {training.isConfirmed.toString()}</div>
                <button
                  type="button"
                  onClick={() => {
                    setShowModal(true);
                    setCurrentEvent(training);
                  }}
                  className="mt-3 w-full rounded-lg bg-red-600 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-600"
                >
                  Sign off
                </button>
              </div>
            );
          })}
        </div>
      </div>
      <ModalLogin
        isVisible={showModal}
        onClose={() => {
          setShowModal(false);
        }}
        title="Cancel training"
      >
        {currentEvent.isConfirmed === false ? (
          <div>
            <h2>Are you sure u want to cancel this training?</h2>
            <div className="mb-3">
              <h3 className="mb-2 mt-3">Training data:</h3>
              <p>{currentEvent.category.name}</p>
              <p>Club name: {currentEvent.club.name} </p>
              <p>Start date: {currentEvent.startDate}</p>
              <p>Duration time: {currentEvent.duration}</p>
              <p>
                Room: {currentEvent.room.id} - {currentEvent.room.type}
              </p>
            </div>
            <button
              type="button"
              onClick={() => handleSignOff(currentEvent.id)}
              className="mt-3 w-full rounded-lg bg-red-600 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-600"
            >
              Sign off
            </button>
          </div>
        ) : (
          <div className="text-center">
            <p>Unluckily this training has been already confirmed by one of our employees.</p>
            <p>
              Contact one of our employees, we will try to find someone who can takeover this
              training
            </p>
          </div>
        )}
      </ModalLogin>
    </section>
  );
};

export default HomepageCoach;
