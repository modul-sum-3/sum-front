import Sidebar from "../components/StaffSidebar";

const StaffTemplate = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-200">
      <Sidebar />
      <div className="flex-grow max-w-screen-xl self-center w-full px-2 sm:px-4">
        {children}
      </div>
    </div>
  );
};

export default StaffTemplate;
