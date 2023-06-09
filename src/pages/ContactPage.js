import IMask from 'imask';
import { useState } from 'react';
import { NotificationManager } from 'react-notifications';
import 'react-notifications/lib/notifications.css';
import MainTemplate from '../templates/MainTemplate';

const Contact = () => {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [phoneNumber1, setPhoneNumber] = useState('');
  const [email1, setEmail] = useState('');
  const [message, setMessage] = useState('');

  function handlePhone() {
    const phone = document.querySelector('#phonenumber');

    IMask(phone, {
      mask: '000-000-000',
    });

    phone.addEventListener('change', () => {
      setPhoneNumber(phone.value);
    });
  }

  function isValidEmail(newEmail) {
    return /\S+@\S+\.\S+/.test(newEmail);
  }

  const handleSend = (e) => {
    if (!isValidEmail(email1)) {
      NotificationManager.error('Invaild email!');
      return;
    }

    e.target.reset();
    setName(null);
    setSurname(null);
    setPhoneNumber(null);
    setEmail(null);
    setMessage(null);
  };

  // rounded-xl border-[3px] border-primary

  return (
    <MainTemplate>
      <div className="absolute left-1/2 top-1/2 mt-8 flex w-full max-w-screen-xl -translate-x-1/2 -translate-y-1/2 justify-between">
        <div className="flex flex-col gap-10">
          <article className="">
            <div className="flex items-start justify-between rounded-t-lg border-b bg-white p-6">
              <h2 className="font-semibold text-gray-800">Customer Service Department</h2>
            </div>
            <div className="bg-white p-6 text-lg leading-8">
              <p className="text-gray-900">12 345 67 89 </p>
              <p>
                <span className="font-semibold text-primary">contact@fitNest.bestrong.pl</span>
              </p>
              <p className="text-gray-900">
                We are working since Monday to Sunday, from 8:00 to 20:00.
              </p>
            </div>
            <div className="flex items-center space-x-2 rounded-b-lg border-t border-gray-200 bg-white p-6" />
          </article>

          <article className="">
            <div className="flex items-start justify-between rounded-t-lg border-b bg-white p-6">
              <h2 className="font-semibold text-gray-800">Contact For Companies</h2>
            </div>
            <div className="bg-white p-6 text-lg leading-8">
              <p className="text-gray-900">
                Interested companies can send offers to the following e-mail address:
              </p>
              <p className="">
                <span className="font-semibold text-primary">companies@fitNest.bestrong.pl</span>
              </p>
            </div>
            <div className="flex items-center space-x-2 rounded-b-lg border-t border-gray-200 bg-white p-6" />
          </article>
        </div>

        <div className="">
          <div className="flex items-start justify-between rounded-t-lg border-b bg-white p-6">
            <h2 className="font-semibold text-gray-800">Send us a message</h2>
          </div>
          <div className="bg-white p-12">
            <form className="flex flex-col gap-8 max-lg:w-1/2 max-md:w-2/3" onSubmit={handleSend}>
              <div className="flex flex-row gap-2">
                <input
                  placeholder="Your name"
                  id="name"
                  type="text"
                  required
                  onChange={(event) => setName(event.target.value)}
                  className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary focus:ring-primary disabled:cursor-not-allowed disabled:opacity-50"
                />

                <input
                  placeholder="Your surname"
                  id="surname"
                  type="text"
                  required
                  onChange={(event) => setSurname(event.target.value)}
                  className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary focus:ring-primary disabled:cursor-not-allowed disabled:opacity-50"
                />
              </div>
              <div className="flex flex-row gap-2">
                <input
                  placeholder="Your phone number"
                  id="phonenumber"
                  type="tel"
                  onChange={handlePhone}
                  required
                  className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary focus:ring-primary disabled:cursor-not-allowed disabled:opacity-50"
                />
              </div>
              <div className="flex justify-center">
                <input
                  placeholder="Your email"
                  id="email"
                  type="email"
                  required
                  onChange={(event) => setEmail(event.target.value)}
                  className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary focus:ring-primary disabled:cursor-not-allowed disabled:opacity-50"
                />
              </div>
              <div className="flex justify-center">
                <textarea
                  placeholder="Your message"
                  id="message"
                  type="text"
                  required
                  onChange={(event) => setMessage(event.target.value)}
                  className="h-48 w-full resize-none rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary focus:ring-primary disabled:cursor-not-allowed disabled:opacity-50"
                />
              </div>

              <button
                type="submit"
                className="rounded-lg bg-primary px-5 py-2.5 text-center text-sm font-medium text-white transition-colors hover:bg-hover"
              >
                Send
              </button>
            </form>
          </div>
          <div className="flex items-center space-x-2 rounded-b-lg border-t border-gray-200 bg-white p-6" />
        </div>
      </div>
    </MainTemplate>
  );
};

export default Contact;
