import axios from 'axios';
import { useState, useEffect } from 'react';
import { NotificationManager } from 'react-notifications';
import user from '../../data/store';
import ModalLogin from '../Site/ModalLogin';

const ClientTrainings = () => {
  const [trainings, setTrainings] = useState([]);
  const Userid = user((state) => state.id);
  const [showModal, setShowModal] = useState(false);
  const [chosenTraining, setChosenTraining] = useState([]);
  const [chosenFinal, setChosenFinal] = useState('');
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
        setShowModal(false);
      })
      .catch(() => {
        NotificationManager.error('Cannot sign off, try again later');
      });
  };

  return (
    <div className="flex w-full flex-col justify-center text-black">
      <p className="mb-3 self-center">Your trainings:</p>
      <div className="flex h-[400px]  justify-center overflow-auto">
        <div className="grid grid-rows-1">
          {trainings.length === 0 ? (
            <div className="mt-5 block w-full text-center">
              You haven't enrolled to any trainings, you can do it by openining your{' '}
              <a className="underline" href="/clubs">
                Club
              </a>{' '}
              calendar and click on chosen training!{' '}
            </div>
          ) : null}
          <div className="mx-16 mt-8 grid grid-cols-3  ">
            {trainings.length !== 0
              ? trainings.map((training) => {
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
                        onClick={() => {
                          setChosenTraining(training);
                          setShowModal(true);
                          setChosenFinal(final);
                        }}
                        className="mt-3 w-full rounded-lg bg-red-600 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-600"
                      >
                        Sign off
                      </button>
                    </div>
                  );
                })
              : null}
          </div>
        </div>
      </div>
      <ModalLogin
        isVisible={showModal}
        onClose={() => {
          setShowModal(false);
        }}
        title="Training enrollment"
      >
        {chosenTraining.length !== 0 ? (
          <div className="text-center">
            <p>Are you sure you want to sign off from this training?</p>
            <div className="my-3">
              <p>{chosenTraining.category.name}</p>
              <p>Club name: {chosenTraining.club.name} </p>
              <p>Start date: {chosenFinal}</p>
              <p>Duration time: {chosenTraining.duration}</p>
              <p>
                Trainer: {chosenTraining.trainer.first_name} {chosenTraining.trainer.last_name}
              </p>
              <p>
                Room: {chosenTraining.room.id} - {chosenTraining.room.type}
              </p>
            </div>
            <button
              type="button"
              onClick={() => handleSignOff(chosenTraining.id)}
              className="mt-3 w-full rounded-lg bg-red-600 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-600"
            >
              Sign off
            </button>
          </div>
        ) : null}
      </ModalLogin>
    </div>
  );
};

export default ClientTrainings;
