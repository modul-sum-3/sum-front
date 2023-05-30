const AddTraining = () => {
  return (
    <div className="flex h-full items-center justify-center">
      <form className="flex  w-3/4 flex-col  gap-3">
        <div className="flex flex-row gap-2">
          <input
            placeholder="Date"
            id="date"
            type="date"
            required
            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary focus:ring-primary disabled:cursor-not-allowed disabled:opacity-50"
          />

          <input
            placeholder="Time"
            id="time"
            type="time"
            required
            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-center text-sm text-gray-900 focus:border-primary focus:ring-primary disabled:cursor-not-allowed disabled:opacity-50"
          />
        </div>
        <div className="flex flex-row gap-2">
          <input
            placeholder="Room number"
            id="room"
            type="number"
            required
            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary focus:ring-primary disabled:cursor-not-allowed disabled:opacity-50"
          />
          <input
            placeholder="Category"
            id="category"
            type="text"
            required
            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary focus:ring-primary disabled:cursor-not-allowed disabled:opacity-50"
          />
        </div>
        <div className="flex flex-row items-center gap-2">
          <input
            placeholder="Amount of people"
            id="amount"
            type="number"
            min={5}
            required
            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary focus:ring-primary disabled:cursor-not-allowed disabled:opacity-50"
          />

          <input
            placeholder="Duration"
            id="duration"
            type="number"
            min={30}
            required
            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary focus:ring-primary disabled:cursor-not-allowed disabled:opacity-50"
          />
        </div>
        <button
          type="submit"
          className="rounded-lg bg-primary px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-hover focus:outline-none focus:ring-4 focus:ring-primary"
        >
          Send to approval
        </button>
      </form>
    </div>
  );
};

export default AddTraining;
