import { Link } from "react-router-dom";
import "../style/Home.css";

const Home = () => {
  return (
    <div className="home">
      <h1>Welcome to My Health App</h1>
      <p>Track your diet, exercise, and health reports all in one place.</p>
      <div className="home-links">
        <Link to="/login" className="home-link">
          Login
        </Link>
        <Link to="/signup" className="home-link">
          Sign Up
        </Link>
      </div>
    </div>
  );
};

export default Home;
