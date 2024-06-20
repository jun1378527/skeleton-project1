import { Link } from "react-router-dom";
import "../../style/Navbar.css";

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/signup">Signup</Link>
        </li>
        <li>
          <Link to="/communities">Communities</Link>
        </li>
        <li>
          <Link to="/diet">Diet</Link>
        </li>
        <li>
          <Link to="/exercise">Exercise</Link>
        </li>
        <li>
          <Link to="/health-report">Health Report</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
