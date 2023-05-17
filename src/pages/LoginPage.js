/* eslint-disable tailwindcss/no-contradicting-classname */
import { Navbar } from 'flowbite-react';
import { NotificationContainer } from 'react-notifications';
import LoginForm from '../components/Site/LoginForm';
import MainTemplate from '../templates/MainTemplate';
import RegisterForm from '../components/Site/RegisterForm';

const Login = () => {
  return (
    <MainTemplate dark="bg-black/90">
      <div className="max-w-screen flex min-h-screen grow items-center justify-center">
        <div className="flex w-1/2 text-white">
          <LoginForm />
        </div>
        <div className="flex w-1/2 text-white">
          <RegisterForm />
        </div>
      </div>
    </MainTemplate>
  );
};
export default Login;
