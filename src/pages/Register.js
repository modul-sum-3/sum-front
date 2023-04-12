import RegisterForm from "../components/RegisterForm";

const Register = () => {
  return (
    <div class="grid bg-gray-200 h-screen">
      <div class="">
        <a href="/" class="" aria-current="page">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Grey_close_x.svg/1200px-Grey_close_x.svg.png"
            class="mt-2 mx-2 h-6 sm:h-9"
            alt="cross"
          />
        </a>
      </div>
      <RegisterForm />
    </div>
  );
};

export default Register;
