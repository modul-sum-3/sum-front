import user from '../../data/store';

const AboutMeCoach = () => {
  const userData = user((state) => state.userData);

  return (
    <div>
      <div>
        {userData.first_name} {userData.last_name}
      </div>
      <div>
        {userData.email} {userData.phone_number}
      </div>
    </div>
  );
};

export default AboutMeCoach;
