import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Auth/Login";
import Signup from "./components/Auth/Signup";
import CommunityList from "./components/Community/CommunityList";
import CommunityDetail from "./components/Community/CommunityDetail";
import Diet from "./components/Dashboard/Diet";
import Exercise from "./components/Dashboard/Exercise";
import HealthReport from "./components/Dashboard/HealthReport";
import Challenges from "./components/Challenges/Challenges";
import WalkingChallenge from "./components/Challenges/WalkingChallenge";
import { AuthProvider } from "./contexts/AuthContext";

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/communities" element={<CommunityList />} />
            <Route path="/communities/:id" element={<CommunityDetail />} />
            <Route path="/dashboard/diet" element={<Diet />} />
            <Route path="/dashboard/exercise" element={<Exercise />} />
            <Route path="/dashboard/health-report" element={<HealthReport />} />
            <Route path="/challenges" element={<Challenges />} />
            <Route path="/challenges/walking" element={<WalkingChallenge />} />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
};

export default App;
