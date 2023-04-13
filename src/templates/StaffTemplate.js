import StaffSidebar from "../components/StaffSidebar";

const StaffTemplate = ({ children }) => {
  return (
    <div className="m-auto flex min-h-screen flex-col bg-blue-200">
      <StaffSidebar>{children}</StaffSidebar>
    </div>
  );
};

export default StaffTemplate;
