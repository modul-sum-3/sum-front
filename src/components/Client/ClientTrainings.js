import axios from 'axios';
import { useState, useEffect } from 'react';
import { NotificationManager } from 'react-notifications';
import user from '../../data/store';

const ClientTrainings = () => {
  const [trainings, setTrainings] = useState([]);
  const Userid = user((state) => state.id);
  const [stateChange, setStateChange] = useState();

  useEffect(() => {
    axios
      .get(`http://springboot-385918.oa.r.appspot.com/api/training/client/${Userid}`)
      .then((res) => {
        const dataX = res.data;
        setTrainings(dataX);
      })
      .catch((e) => {
        NotificationManager.success(e);
      });
  }, [Userid, stateChange]);

  const handleSignOff = (TrainingID) => {
    axios
      .patch(
        `http://springboot-385918.oa.r.appspot.com/api/training/removeClient?TrainingID=${TrainingID}`,
        { id: Userid },
      )
      .then(() => {
        setStateChange(Math.random());
        NotificationManager.success('Successfuly signoff');
      })
      .catch(() => {
        NotificationManager.error('Cannot sign off, try again later');
      });
  };

  return (
    <div className="flex w-full flex-col justify-center text-black">
      <p className="mb-3 self-center">Your trainings:</p>
      <div className="flex h-[400px]  justify-center overflow-auto">
        <div className="mx-16 mt-8 grid grid-cols-3 gap-4 ">
          {trainings.map((training) => {
            const newDate = new Date(training.startDate);
            newDate.setHours(newDate.getHours() + 2);
            const updatedDate = newDate.toISOString();
            const date = updatedDate.slice(0, 10);
            const time = updatedDate.slice(11, 16);
            const final = `${date} - ${time}`;
            return (
              <div className="h-fit rounded-lg border border-gray-300 bg-gray-50 p-3 text-sm">
                {/* <div>Club name: {getClubName(training.club_id)}</div> */}
                <div>Category: {training.category.name} </div>
                <div>Club name: {training.club.name} </div>
                <div>Start date: {final}</div>
                <div>Duration time: {training.duration}</div>
                <div>
                  Trainer: {training.trainer.first_name} {training.trainer.last_name}
                </div>
                <div>
                  Room: {training.room.id} - {training.room.type}
                </div>
                <button
                  type="button"
                  onClick={() => handleSignOff(training.id)}
                  className="mt-3 w-full rounded-lg bg-red-600 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-600"
                >
                  Sign off
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ClientTrainings;
