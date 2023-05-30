const ConfirmTraninings = () => {
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
      firstName: 'Filip',
      lastName: 'Warchol',
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
      firstName: 'Kinga',
      lastName: 'Wawrzynczak',
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
      firstName: 'Piotr',
      lastName: 'Wojtczak',
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
      firstName: 'Karol',
      lastName: 'Kazusek',
    },
  ];
  return (
    <div className="flex flex-col justify-center text-black">
      <div className="flex justify-center">Traninings to accept:</div>
      <div className="mx-16 mt-8 grid grid-cols-2 gap-4">
        {exampleTraining.map((training) => {
          return (
            <div className=" rounded-lg border border-gray-300 bg-gray-50 p-3 text-sm">
              {/* <div>Club name: {getClubName(training.club_id)}</div> */}
              <p className="mb-1">Trainer:</p>
              <div className="flex flex-row items-center justify-center">
                <div> First Name: {training.firstName}</div>
                <div className="ml-4"> Last Name: {training.lastName}</div>
              </div>
              <p className="mb-1 mt-2">Training:</p>
              <div className="flex flex-col items-center justify-center">
                <div>Start date: {training.start_date}</div>
                <div>Duration time: {training.duration}</div>
                <div>Room: {training.room_id}</div>
                <div>No. of people: {training.amount}</div>
              </div>
              <button
                type="button"
                className="mt-3 w-full rounded-lg bg-red-600 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-600"
              >
                Accept
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ConfirmTraninings;
