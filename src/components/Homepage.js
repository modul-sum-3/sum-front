import { useEffect, useState } from 'react';

const Homepage = () => {
  const [clientId, setClientId] = useState('');
  const [display, setDisplay] = useState('');

  useEffect(() => {
    if (clientId.length === 0) {
      setDisplay('hidden');
    } else {
      setDisplay('block');
    }
  }, [clientId]);

  return (
    <div className="flex h-screen w-full flex-col">
      <div className="mt-12 flex justify-center">
        <input
          placeholder="Insert Client ID"
          id="insertId"
          type="text"
          onChange={(event) => setClientId(event.target.value)}
          className="block w-2/3 rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary focus:ring-primary disabled:cursor-not-allowed disabled:opacity-50"
        />
      </div>
      <div className="mt-10 flex h-3/4 justify-center">
        <div
          className={`${display} block w-2/3 rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary focus:ring-primary disabled:cursor-not-allowed disabled:opacity-50`}
        >
          Tu beda dane klienta
        </div>
      </div>
    </div>
  );
};

export default Homepage;
