import Kalend, { CalendarView, OnEventClickData } from 'kalend';
import { useParams } from 'react-router-dom';
import { NotificationContainer, NotificationManager } from 'react-notifications';
import axios from 'axios';
import { useEffect, useState } from 'react';
import MainTemplate from '../templates/MainTemplate';
import ModalLogin from '../components/Site/ModalLogin';
import user from '../data/store';

const ClubPage = () => {
  const { id: clubId } = useParams();
  const [events, setEvents] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [isHidden, setHidden] = useState('');
  const [event, setEvent] = useState([]);
  const role = user((state) => state.role);
  const Userid = user((state) => state.id);
  const [clientTrainings, setClientTrainings] = useState([]);
  const [clientTrainingsIds, setClientTrainingsIds] = useState([]);
  const [final, setFinal] = useState('');

  useEffect(() => {
    if (role === 'CLIENT') {
      axios
        .get(`http://springboot-385918.oa.r.appspot.com/api/training/client/${Userid}`)
        .then((res) => {
          const dataX = res.data;
          setClientTrainings(dataX);
          const onlyTrainingsIds = dataX.map((training) => training.id);
          setClientTrainingsIds(onlyTrainingsIds);
        })
        .catch((e) => {
          console.log(e);
        });
    }
  }, [Userid, role]);

  useEffect(() => {
    axios
      .get(`https://springboot-385918.oa.r.appspot.com/api/training/club/${clubId}`)
      .then((res) => {
        const eventsBeforeMap = res.data;
        const eventsFiltered = eventsBeforeMap.filter((obj) => obj.isConfirmed === true);
        const eventsMapped = eventsFiltered.map(
          ({ id, startDate, endTime, category, trainer }) => ({
            id,
            startAt: startDate,
            endAt: endTime,
            timezoneStartAt: 'Europe/Berlin',
            summary: `${trainer.last_name} ${category.name}`,
            color: 'blue',
            calendarID: 'kalend',
          }),
        );

        setEvents(eventsMapped);
      })
      .catch((e) => {
        NotificationManager.error(`Cannot get user - ${e}`);
      });
  }, [clubId]);

  const handleEventClick = (e) => {
    setEvent(e);
    setHidden('hidden');
    setShowModal(true);
  };

  useEffect(() => {
    if (event.startAt) {
      const newDate = new Date(event.startAt);
      newDate.setHours(newDate.getHours() + 2);
      const updatedDate = newDate.toISOString();
      const date = updatedDate.slice(0, 10);
      const time = updatedDate.slice(11, 16);
      setFinal(`${date} - ${time}`);
    }
  }, [event]);

  const handleTrainingEnroll = () => {
    axios
      .post(
        `http://springboot-385918.oa.r.appspot.com/api/training/addClient?TrainingID=${event.id}`,
        { id: Userid },
      )
      .then(() => {
        NotificationManager.success('Successfully enrolled');
      })
      .catch((err) => {
        NotificationManager.error(`Couldn't enroll ${err}`);
      });
  };

  return (
    <MainTemplate>
      <div className={`${isHidden} mt-14 h-[700px] w-[1200px] rounded-xl bg-white`}>
        <Kalend
          onEventClick={(e) => handleEventClick(e)}
          initialDate={new Date().toISOString()}
          initialView={CalendarView.WEEK}
          events={events}
          timeFormat="24"
          weekDayStart="Monday"
          language="en"
          disabledDragging
        />
      </div>
      <ModalLogin
        isVisible={showModal}
        onClose={() => {
          setShowModal(false);
          setHidden('');
        }}
        title="Training enrollment"
      >
        <div className="mb-8">
          <h2 className="mb-2">Training data:</h2>
          <div>{event.summary}</div>
          <div>{final}</div>
        </div>
        {role === 'CLIENT' ? (
          <div>
            {clientTrainingsIds.includes(event.id) ? (
              <div>
                You have already enroll to this training, do you want to sign off? Go to{' '}
                <a href="/client" className="underline">
                  Client
                </a>{' '}
                page and sign off from any training
              </div>
            ) : (
              <div>
                <p>If you want to enroll to this training click button below</p>
                <button
                  type="button"
                  onClick={handleTrainingEnroll}
                  className="mt-2 rounded-lg bg-primary px-6 py-2 font-semibold text-white"
                >
                  Enroll
                </button>
              </div>
            )}
          </div>
        ) : (
          <div> If u want to enroll to training - log in</div>
        )}
      </ModalLogin>
      <NotificationContainer />
    </MainTemplate>
  );
};

export default ClubPage;
