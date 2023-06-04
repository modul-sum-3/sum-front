/* eslint-disable tailwindcss/no-contradicting-classname */
import { NotificationContainer } from 'react-notifications';
import LoginForm from '../components/Site/LoginForm';
import MainTemplate from '../templates/MainTemplate';

const Login = () => {
  return (
    <MainTemplate dark="bg-black/90">
      <div className="flex h-full items-center text-white">
        <LoginForm />
      </div>
      <NotificationContainer />
    </MainTemplate>
  );
};
export default Login;
