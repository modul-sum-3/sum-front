import axios from 'axios';
import { NotificationManager } from 'react-notifications';
import { useState } from 'react';

const ClientTrainings = ({ clientId }) => {
  const [trainings, setTrainings] = useState({});

  const exampleTraining = [
    {
      id: 1,
      amount: 10,
      start_date: '2023-01-05 12:00',
      category_id: 2,
      club_id: 1,
      room_id: 1,
      trainer_id: 1,
      duration: 45,
    },
    {
      id: 2,
      amount: 9,
      start_date: '2023-01-06 12:00',
      category_id: 1,
      club_id: 1,
      room_id: 1,
      trainer_id: 1,
      duration: 60,
    },
    {
      id: 3,
      amount: 5,
      start_date: '2023-01-07 12:00',
      category_id: 5,
      club_id: 1,
      room_id: 1,
      trainer_id: 2,
      duration: 60,
    },
    {
      id: 3,
      amount: 5,
      start_date: '2023-01-07 12:00',
      category_id: 5,
      club_id: 1,
      room_id: 1,
      trainer_id: 2,
      duration: 60,
    },
  ];

  const getClubName = (id) => {
    let club = {};
    let clubName = '';

    axios
      .get('')
      .then((res) => {
        club = res.data;
        clubName = club.name;
      })
      .catch(() => NotificationManager.error('Cannot get club name'));

    return clubName;
  };

  const getCategoryName = (id) => {
    let category = {};
    let categoryName = '';

    axios
      .get('')
      .then((res) => {
        category = res.data;
        categoryName = category.name;
      })
      .catch(() => NotificationManager.error('Cannot get club name'));

    return categoryName;
  };

  const getTrainerName = (id) => {
    let trainer = {};
    let trainerName = '';

    axios
      .get('')
      .then((res) => {
        trainer = res.data;
        trainerName = trainer.name;
      })
      .catch(() => NotificationManager.error('Cannot get club name'));

    return trainerName;
  };

  //   axios
  //     //! id will be as an param to get
  //     .get('')
  //     .then((res) => {
  //       setTrainings(res.data);
  //     })
  //     .catch(() => NotificationManager.error('Couldnt get data'));

  return (
    <div className="flex flex-col justify-center text-black">
      <div className="flex justify-center">Your trainings:</div>
      <div className="mx-16 mt-8 grid grid-cols-2 gap-4">
        {exampleTraining.map((training) => {
          return (
            <div className=" rounded-lg border border-gray-300 bg-gray-50 p-3 text-sm">
              {/* <div>Club name: {getClubName(training.club_id)}</div> */}
              <div>Category: {training.category_id} here will be category name</div>
              <div>Club name: {training.club_id} here will be club name</div>
              <div>Start date: {training.start_date}</div>
              <div>Duration time: {training.duration}</div>
              <div>Trainer: {training.trainer_id} here will be trainer name</div>
              <div>Room: {training.room_id}</div>
              <button
                type="button"
                className="mt-3 w-full rounded-lg bg-gradient-to-r from-red-500 to-red-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gradient-to-br focus:outline-none focus:ring-4 focus:ring-red-500"
              >
                Sign off
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ClientTrainings;
