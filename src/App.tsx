import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from './layout/Layout';
import Attendence from './pages/attendence/Attendence';
import Profile from './pages/profile/Profile';
import { menuItems } from "./constant/MenuItems";
import useSideBarItem from './hooks/useSideBarItems';
import Events from "./pages/events/Events";
import Leaves from './pages/leaves/Leaves'
import Promotions from "./pages/promotions/Promotions";
import Increments from "./pages/increments/Increments";
import Perks from "./pages/perks/Perks";
import Documents from "./pages/documents/Documents";
import Contract from "./pages/contract/Contract";
import ExperienceLetter from "./pages/experienceLetter/ExperienceLetter";
import Letter from './pages/leaves/Leaves'
import UpdateProfile from "./pages/updateProfile/UpdateProfile";
function App() {
  return (
    <Router>
      <InnerApp />
    </Router>
  );
}
const InnerApp = () => {
  const { activeItem, setActiveItem, toggleSidebar, sidebarCollapsed } = useSideBarItem('profile');
  
  return (
    <Layout
      menuItems={menuItems}
      activeItem={activeItem}
      setActiveItem={setActiveItem}
      toggleSidebar={toggleSidebar}
      sidebarCollapsed={sidebarCollapsed}
    >
      <Routes>
        <Route path="/" element={<Profile />} />
        <Route path="/attendance" element={<Attendence />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/events" element={<Events />} />
        <Route path="/leaves" element={<Leaves />} />
        <Route path="/promotions" element={<Promotions/>} />
        <Route path="/increments" element={<Increments/>} />
        <Route path="/perks" element={<Perks/>} />
        <Route path="/documents" element={<Documents/>}/>
        <Route path="/contract" element={<Contract/>}/>
        <Route path="/experienceLetter" element={<ExperienceLetter/>}/>
        <Route path="/letters" element={<Letter/>}/>
        <Route path="/updateProfile" element={<UpdateProfile/>}/>
        <Route path="*" element={<div>404 - Page Not Found</div>} />
      </Routes>
    </Layout>
  );
};

export default App;