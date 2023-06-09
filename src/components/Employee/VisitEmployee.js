import { useState, useEffect } from 'react';
import { NotificationManager } from 'react-notifications';
import axios from 'axios';
import user from '../../data/store';
import ModalLogin from '../Site/ModalLogin';

const VisitEmployee = ({ clientID }) => {
  const [closestTraining, setClosestTraining] = useState([]);
  const [activeVisit, setActiveVisit] = useState([]);
  const [final, setFinal] = useState();
  const [final2, setFinal2] = useState();
  const [stateHandler, setStateHandler] = useState();
  const [grade, setGrade] = useState();
  const [disabled, setDisabled] = useState(true);
  const [showModal, setShowModal] = useState(false);

  const club = user((state) => state.club);

  useEffect(() => {
    if (closestTraining.length !== 0) {
      const newDate = new Date(closestTraining.startDate);
      newDate.setHours(newDate.getHours() + 2);
      const updatedDate = newDate.toISOString();
      const date = updatedDate.slice(0, 10);
      const time = updatedDate.slice(11, 16);
      setFinal(`${date} - ${time}`);

      const now = new Date();
      const future = new Date();
      future.setTime(now.getTime() + 2 * 60 * 60 * 1000 + 30 * 60 * 1000);
      if (future <= newDate) {
        setDisabled('disabled');
      } else {
        setDisabled('not-disabled');
      }
    }
  }, [closestTraining]);

  useEffect(() => {
    if (activeVisit !== null && activeVisit.length !== 0) {
      const newDate = new Date(activeVisit.start_visit);
      newDate.setHours(newDate.getHours() + 4);
      const updatedDate = newDate.toISOString();
      const date = updatedDate.slice(0, 10);
      const time = updatedDate.slice(11, 16);
      setFinal2(`${date} - ${time}`);
    }
  }, [activeVisit]);

  useEffect(() => {
    axios
      .get(`https://springboot-385918.oa.r.appspot.com/api/training/client/${clientID}`)
      .then((res) => {
        const allTrainings = res.data;

        const currentDate = new Date();

        const theClosestTraining = allTrainings.reduce((closest, current) => {
          const startDate = new Date(current.startDate);
          const closestStartDate = new Date(closest.startDate);

          const timeDiffCurrent = Math.abs(startDate.getTime() - currentDate.getTime());
          const timeDiffClosest = Math.abs(closestStartDate.getTime() - currentDate.getTime());

          if (timeDiffCurrent < timeDiffClosest) {
            return current;
          }
          return closest;
        });

        setClosestTraining(theClosestTraining);
      });

    axios
      .get(`https://springboot-385918.oa.r.appspot.com/api/Ranking/client/${clientID}`)
      .then((res) => {
        setActiveVisit(res.data);
      });
  }, [clientID, stateHandler]);

  const handleStartVisitGym = () => {
    const now = new Date();
    const dateE = now.toISOString();
    const formatedDate = dateE.slice(0, 19);
    const completeDate = formatedDate.concat('+02:00');

    const newVisit = {
      client: {
        id: clientID,
      },
      training: {
        id: null,
      },
      club: {
        id: club.id,
      },
      start_visit: completeDate,
    };

    axios
      .post('https://springboot-385918.oa.r.appspot.com/api/Ranking', newVisit)
      .then(() => {
        setStateHandler(Math.random());
        NotificationManager.info('Successfully started visit');
      })
      .catch((err) => {
        NotificationManager.error(`Couldn't start visit ${err}`);
      });
  };
  const handleStartVisitTraining = () => {
    const now = new Date();
    const dateE = now.toISOString();
    const formatedDate = dateE.slice(0, 19);
    const completeDate = formatedDate.concat('+02:00');

    const newVisit = {
      client: {
        id: clientID,
      },
      training: {
        id: closestTraining.id,
      },
      club: {
        id: club.id,
      },
      start_visit: completeDate,
    };

    axios
      .post('https://springboot-385918.oa.r.appspot.com/api/Ranking', newVisit)
      .then(() => {
        setStateHandler(Math.random());
        NotificationManager.info('Successfully started visit');
      })
      .catch((err) => {
        NotificationManager.error(`Couldn't start visit ${err}`);
      });
  };

  const handleFinishVisitGym = () => {
    axios
      .patch(`https://springboot-385918.oa.r.appspot.com/api/Ranking/client/${clientID}/neutral`)
      .then(() => {
        setStateHandler(Math.random());
        NotificationManager.success('Training Finished!');
      })
      .catch(() => {
        NotificationManager.error('Cannot finish training');
      });
  };
  const handleFinishVisitTraining = () => {
    if (grade === '') {
      NotificationManager.error('Choose one of ratings please!');
      return;
    }

    axios
      .patch(`https://springboot-385918.oa.r.appspot.com/api/Ranking/client/${clientID}/${grade}`)
      .then(() => {
        setStateHandler(Math.random());
        setShowModal(false);
        NotificationManager.success('Training Finished!');
      })
      .catch(() => {
        NotificationManager.error('Cannot finish training');
      });
  };

  return (
    <div className="mt-6 flex items-center justify-center">
      <div className="block w-3/4 ">
        <section className="text-center">
          {closestTraining.length !== 0 ? (
            <div className="flex flex-col justify-center text-center">
              <p className="mb-2 text-lg font-semibold">Upcoming training:</p>
              <div>
                {closestTraining.category.name} - {closestTraining.club.name}
              </div>
              <div>Training starts: {final}</div>
              <div>
                Duration: {closestTraining.duration} - Room: {closestTraining.room.type}
              </div>
            </div>
          ) : null}
        </section>
        {activeVisit === null ? (
          <div className="mt-5 flex flex-row justify-center">
            {disabled === 'disabled' ? (
              <button
                type="button"
                onClick={() => handleStartVisitGym()}
                className="rounded-lg bg-red-600 p-3 text-center text-white transition-colors hover:bg-red-800"
              >
                Start visit - just gym
              </button>
            ) : (
              <div>
                <button
                  type="button"
                  onClick={() => handleStartVisitTraining()}
                  className="mr-5 rounded-lg bg-red-600 p-3 text-center text-white transition-colors hover:bg-red-800"
                >
                  Start visit - training
                </button>
                <button
                  type="button"
                  onClick={() => handleStartVisitGym()}
                  className="rounded-lg bg-red-600 p-3 text-center text-white transition-colors hover:bg-red-800"
                >
                  Start visit - just gym
                </button>
              </div>
            )}
          </div>
        ) : (
          <div className="mt-5 flex-col rounded-2xl bg-gray-50 p-2.5 text-center">
            <p className="mb-2 text-lg font-semibold">Current visit:</p>
            <div className="mt-3">Visit start date: {final2}</div>
            {activeVisit.length !== 0 && activeVisit !== null ? (
              <div>
                {activeVisit.training !== null ? (
                  <div>
                    <p>Is on training in room: {activeVisit.training.room.type}</p>
                    <button
                      type="button"
                      onClick={() => setShowModal(true)}
                      className="mt-3 w-full rounded-lg bg-red-600 p-3 text-center text-white transition-colors hover:bg-red-800"
                    >
                      Finish Visit
                    </button>
                  </div>
                ) : (
                  <button
                    type="button"
                    onClick={() => handleFinishVisitGym()}
                    className="mt-3 w-full rounded-lg bg-red-600 p-3 text-center text-white transition-colors hover:bg-red-800"
                  >
                    Finish Visit
                  </button>
                )}
              </div>
            ) : null}
          </div>
        )}
      </div>
      <ModalLogin
        isVisible={showModal}
        onClose={() => {
          setShowModal(false);
        }}
        title="Finish visit"
      >
        <div className="text-center">
          <p className="text-lg">Rate a training!</p>
          <select
            id="categorySelect"
            onChange={(e) => {
              setGrade(e.target.value);
            }}
            className="mt-3 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-lg text-gray-900 focus:border-teal-900 focus:ring-teal-900 disabled:cursor-not-allowed disabled:opacity-50"
          >
            <option value="">Select one rating</option>
            <option value="Excellent">Excellent</option>
            <option value="VeryGood">Very good</option>
            <option value="Good">Good</option>
            <option value="Bad">Bad</option>
            <option value="Tragic">Tragic</option>
          </select>
          <button
            type="button"
            onClick={() => handleFinishVisitTraining()}
            className="mt-3 w-full rounded-lg bg-red-600 px-4 text-center text-white hover:bg-red-800"
          >
            Finish Visit
          </button>
        </div>
      </ModalLogin>
    </div>
  );
};

export default VisitEmployee;
