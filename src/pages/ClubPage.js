import Kalend, { CalendarView } from 'kalend';
import { useParams, useNavigate } from 'react-router-dom';
import { NotificationContainer, NotificationManager } from 'react-notifications';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';
import MainTemplate from '../templates/MainTemplate';
import ModalLogin from '../components/Site/ModalLogin';
import user from '../data/store';

const ClubPage = () => {
  const { id: clubId } = useParams();
  const [events, setEvents] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [isHidden, setHidden] = useState('');
  const [membership, setMembership] = useState([]);
  const [event, setEvent] = useState([]);
  const role = user((state) => state.role);
  const Userid = user((state) => state.id);
  const [clientTrainingsIds, setClientTrainingsIds] = useState([]);
  const [final, setFinal] = useState('');
  const token = user((state) => state.token);

  const [clubData, setClubData] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    if (role === 'CLIENT') {
      axios
        .get(`http://springboot-385918.oa.r.appspot.com/api/training/client/${Userid}`)
        .then((res) => {
          const dataX = res.data;
          const onlyTrainingsIds = dataX.map((training) => training.id);
          setClientTrainingsIds(onlyTrainingsIds);
        })
        .catch((e) => {
          NotificationManager.success(e);
        });
      const config = {
        headers: { Authorization: `Bearer ${token}` },
      };

      axios
        .get(
          `https://springboot-385918.oa.r.appspot.com/api/transaction/clientActive/${Userid}`,
          config,
        )
        .then((res) => {
          setMembership(res.data);
        });
    }
  }, [Userid, role, showModal, token]);

  useEffect(() => {
    axios
      .get(`https://springboot-385918.oa.r.appspot.com/api/training/club/${clubId}`)
      .then((res) => {
        const eventsBeforeMap = res.data;
        setClubData(res.data[0].club);
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
    setShowModal(false);
    setHidden('');
  };

  return (
    <MainTemplate>
      <div className="">
        {clubData.length !== 0 ? (
          <div className="-600px my-3 flex justify-center p-1 text-2xl font-medium text-white">
            Calendar for {clubData.name}
          </div>
        ) : null}
      </div>
      <button
        type="button"
        onClick={() => navigate('/clubs')}
        className="flex w-fit gap-3 rounded-lg bg-primary p-3 font-semibold text-white transition-colors hover:bg-hover"
      >
        <ArrowLeftIcon className="h-6 w-6 self-center" />
        <p className="self-center pr-1">Get back to clubs</p>
      </button>
      <div className={`${isHidden} mt-3 h-[700px] w-[1200px] rounded-xl bg-white`}>
        <Kalend
          onEventClick={(e) => handleEventClick(e)}
          initialDate={new Date().toISOString()}
          initialView={CalendarView.MONTH}
          events={events}
          timeFormat="24"
          autoScroll
          weekDayStart="Monday"
          hourHeight={80}
          language="en"
          disabledDragging
          colors={{
            light: {
              primaryColor: 'blue',
            },
          }}
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
        <div className="mb-8 text-center">
          <h2 className="mb-2">Training data:</h2>
          <div>{event.summary}</div>
          <div>{final}</div>
        </div>
        {membership.length !== 0 && role === 'CLIENT' ? (
          <div className="text-center">
            {membership.expireDate <= event.startAt ? (
              <div className="text-center font-medium">
                In the day of the training your membership will be expired. Wait for your membership
                to expire and renew it or{' '}
                <a href="/contact" className="underline">
                  contact{' '}
                </a>{' '}
                one of our employees to deal with this problem
              </div>
            ) : null}
            {clientTrainingsIds.includes(event.id) && membership.expireDate >= event.startAt ? (
              <div className="font-medium">
                You have already enrolled to this training. Go to{' '}
                <a href="/client" className="underline">
                  Client
                </a>{' '}
                page to sign off or check your trainings.
              </div>
            ) : null}
            {!clientTrainingsIds.includes(event.id) && membership.expireDate >= event.startAt ? (
              <div className="text-center font-medium">
                <p>If you want to enroll to this training, click the button below</p>
                <button
                  type="button"
                  onClick={handleTrainingEnroll}
                  className="mt-2 w-full rounded-lg bg-primary px-6 py-2 font-semibold text-white transition-colors hover:bg-hover"
                >
                  Enroll
                </button>
              </div>
            ) : null}
          </div>
        ) : (
          <div className="text-center font-medium">
            You need to have an active{' '}
            <a href="/membership" className="underline">
              membership
            </a>{' '}
            to enroll to this training.
          </div>
        )}
      </ModalLogin>
      <NotificationContainer />
    </MainTemplate>
  );
};

export default ClubPage;
