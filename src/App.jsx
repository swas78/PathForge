import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./components/main/LandingPage";
import Dashboard from "./components/main/Dashboard";
import PlanningPage from "./components/dashboardfeatures/PlanningPage";
import SettingPage from "./components/dashboardfeatures/SettingPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        {/* Landing page sends users here before the main dashboard flow. */}
        <Route path="/planningpage" element={<PlanningPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/settingpage" element={<SettingPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
