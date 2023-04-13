import StaffSidebar from "../components/StaffSidebar";

const StaffTemplate = ({ children }) => {
  return (
    <div className="m-auto flex min-h-screen flex-col items-center bg-gray-200">
      <StaffSidebar>{children}</StaffSidebar>
    </div>
  );
};

export default StaffTemplate;
