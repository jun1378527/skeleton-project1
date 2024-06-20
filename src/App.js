import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Login from "./components/Auth/Login";
import Signup from "./components/Auth/Signup";
import CommunityList from "./components/Community/CommunityList";
import CommunityDetail from "./components/Community/CommunityDetail";
import Diet from "./components/Dashboard/Diet";
import Exercise from "./components/Dashboard/Exercise";
import HealthReport from "./components/Dashboard/HealthReport";
import "./style/App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/communities" element={<CommunityList />} />
          <Route path="/communities/:id" element={<CommunityDetail />} />
          <Route path="/diet" element={<Diet />} />
          <Route path="/exercise" element={<Exercise />} />
          <Route path="/health-report" element={<HealthReport />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
