import RegisterForm from '../Site/RegisterForm';

const RegisterClient = () => {
  return (
    <div className="relative flex h-[95vh] w-full flex-col">
      <div className="text-center text-2xl font-semibold">Enter client information:</div>
      <div className="absolute left-1/2 top-1/2 w-full -translate-x-1/2 -translate-y-1/2 scale-110">
        <RegisterForm />
      </div>
    </div>
  );
};

export default RegisterClient;
