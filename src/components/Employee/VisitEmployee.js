import { useState, useEffect } from 'react';
import { NotificationManager } from 'react-notifications';
import axios from 'axios';
import user from '../../data/store';

const VisitEmployee = ({ clientID }) => {
  const [closestTraining, setClosestTraining] = useState([]);
  const [activeVisit, setActiveVisit] = useState([]);
  const [final, setFinal] = useState();
  const [final2, setFinal2] = useState();
  const [stateHandler, setStateHandler] = useState();
  const [disabled, setDisabled] = useState(true);

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
    if (activeVisit.length !== 0) {
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

  return (
    <div className="mt-6  flex items-center justify-center">
      <div className="block w-3/4 ">
        <section>
          <p>Upcoming training:</p>

          {closestTraining.length !== 0 ? (
            <div>
              <div>{closestTraining.category.name}</div>
              <div>{closestTraining.club.name}</div>
              <div>Training starts: {final}</div>
              <div>Duration: {closestTraining.duration}</div>
              <div>Room: {closestTraining.room.type}</div>
            </div>
          ) : null}
        </section>
        {activeVisit === null ? (
          <div className="mt-5 flex flex-row justify-center">
            {disabled === 'disabled' ? (
              <button
                type="button"
                onClick={() => handleStartVisitGym()}
                className="rounded-lg bg-red-600 px-5 py-1.5 text-center text-sm font-medium text-white hover:bg-red-500"
              >
                Start visit - just gym
              </button>
            ) : (
              <div>
                <button
                  type="button"
                  onClick={() => handleStartVisitTraining()}
                  className="mr-5 rounded-lg bg-red-600 px-5 py-1.5 text-center text-sm font-medium text-white hover:bg-red-500"
                >
                  Start visit - training
                </button>
                <button
                  type="button"
                  onClick={() => handleStartVisitGym()}
                  className="rounded-lg bg-red-600 px-5 py-1.5 text-center text-sm font-medium text-white hover:bg-red-500"
                >
                  Start visit - just gym
                </button>
              </div>
            )}
          </div>
        ) : (
          <div className=" flex-col rounded-2xl border border-red-500 bg-gray-50 p-2.5 text-sm">
            <div>Visit start date: {final2}</div>
            {activeVisit.length !== 0 ? (
              <div>
                {activeVisit.training !== null ? (
                  <div>
                    <p>Is on training</p>
                    <p>Room: {activeVisit}</p>
                    <button
                      type="button"
                      className="mt-3 w-full rounded-lg bg-red-600 px-5 py-1.5 text-center text-sm font-medium text-white hover:bg-red-500"
                    >
                      Finish Visit
                    </button>
                  </div>
                ) : (
                  <button
                    type="button"
                    className="mt-3 w-full rounded-lg bg-red-600 px-5 py-1.5 text-center text-sm font-medium text-white hover:bg-red-500"
                  >
                    Finish Visit
                  </button>
                )}
              </div>
            ) : null}
          </div>
        )}
      </div>
    </div>
  );
};

export default VisitEmployee;
