const ClubRow = ({ city, location }) => (
  <div className=" w-full">
    <a href="/" className="flex justify-between">
      <h3>FitNest Club, {city}</h3>
      <h4>{location}</h4>
      <p>Check calendar </p>
    </a>
  </div>
);

export default ClubRow;
