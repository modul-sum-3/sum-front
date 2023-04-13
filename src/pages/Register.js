import RegisterForm from "../components/RegisterForm";

const Register = () => {
  return (
    <div class="grid h-screen bg-gray-500 bg-[url('assets/gym1.jpg')] bg-cover bg-center bg-no-repeat bg-blend-multiply">
      <div class="backdrop-blur-sm">
        <a href="/" class="" aria-current="page">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Grey_close_x.svg/1200px-Grey_close_x.svg.png"
            class="mx-2 mt-2 h-6 sm:h-9"
            alt="cross"
          />
        </a>
      </div>
      <RegisterForm />
    </div>
  );
};

export default Register;
