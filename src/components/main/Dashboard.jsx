import DashboardHeroPage from "../dashboardcomponents/DashboardHeroPage";
import DashboardNavbar from "../dashboardcomponents/DashboardNavbar";

function Dashboard() {
  return (
    <div className="h-screen overflow-hidden bg-[#050816] text-white">
      <DashboardNavbar />
      <DashboardHeroPage />
    </div>
  );
}

export default Dashboard;
