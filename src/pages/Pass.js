import PassCard from "../components/PassCard";
import MainTemplate from "../templates/MainTemplate";

const Pass = () => {
  return (
    <div>
      <MainTemplate>
        <div className="flex flex-col items-center">
          <h2>Our pricing</h2>
          <h1>Choose Your Best Plan</h1>
          <p>Choose the plan that suits you</p>
        </div>
        <div className="my-6 flex gap-4">
          <PassCard title="Karta" price="20">
            content
          </PassCard>
          <PassCard title="Karta" price="20">
            content
          </PassCard>
          <PassCard title="Karta" price="20">
            content
          </PassCard>
          <PassCard title="Karta" price="20">
            content
          </PassCard>
        </div>
      </MainTemplate>
    </div>
  );
};
export default Pass;
