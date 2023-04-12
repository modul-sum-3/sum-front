import RegisterForm from "../components/RegisterForm";

const Register = () => {
  return (
    <div class="grid bg-center bg-no-repeat bg-cover bg-[url('assets/gym1.jpg')] bg-gray-500 bg-blend-multiply h-screen">
      <div class="backdrop-blur-sm">
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
