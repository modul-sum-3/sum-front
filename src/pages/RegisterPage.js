import { NotificationContainer } from 'react-notifications';
import { useNavigate } from 'react-router-dom';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';
import RegisterForm from '../components/Site/RegisterForm';
import MainTemplate from '../templates/MainTemplate';

const Register = () => {
  const navigate = useNavigate();

  return (
    <MainTemplate>
      <div className="absolute left-1/2 top-1/2 flex w-1/3 -translate-x-1/2 -translate-y-1/2 flex-col">
        <button type="button" onClick={() => navigate(-1)}>
          <ArrowLeftIcon className="mb-10 h-10 w-10 text-white" />
        </button>

        <div className="flex items-start justify-between rounded-t-lg border-b bg-white p-6">
          <h3 className="text-xl font-semibold text-gray-800 dark:text-white">Register</h3>
        </div>
        <div className="bg-white p-12">
          <RegisterForm />
        </div>
        <div className="flex items-center space-x-2 rounded-b-lg border-t border-gray-200 bg-white p-6" />
      </div>
      <NotificationContainer />
    </MainTemplate>
  );
};

export default Register;
