import "../styles/Footer.css";
import twitterIcon from "../assets/img/twitter.png";
import facebookIcon from "../assets/img/facebook.png";
import instagramIcon from "../assets/img/instagram.png";
import pinterestIcon from "../assets/img/pinterest.png";
import vimeoIcon from "../assets/img/vimeo.png";

const Footer = () => {
  return (
    <footer>
      <div className="footer2">
        <div className="footer-column">
          <h2 className="footer-logo">HEALTH APP</h2>
          <p>Your companion for a healthier life.</p>
          <div className="footer-icons">
            <img src={twitterIcon} alt="Twitter" />
            <img src={facebookIcon} alt="Facebook" />
            <img src={instagramIcon} alt="Instagram" />
            <img src={pinterestIcon} alt="Pinterest" />
            <img src={vimeoIcon} alt="Vimeo" />
          </div>
        </div>
        <div className="footer-column">
          <h3>RESOURCES</h3>
          <ul>
            <li>
              <a href="#">Healthy Recipes</a>
            </li>
            <li>
              <a href="#">Workout Guides</a>
            </li>
            <li>
              <a href="#">Health Blog</a>
            </li>
            <li>
              <a href="#">Community Support</a>
            </li>
            <li>
              <a href="#">Nutrition Tips</a>
            </li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>COMPANY</h3>
          <ul>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Careers</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
            <li>
              <a href="#">Terms of Service</a>
            </li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>SUBSCRIBE FOR UPDATES</h3>
          <p>
            Get the latest health tips, recipes, and community updates directly
            to your inbox.
          </p>
          <input type="email" placeholder="Your email" />
        </div>
      </div>
      <div className="footer3">
        <p>© 2024 Health App. All rights belong to Jun</p>
      </div>
    </footer>
  );
};

export default Footer;
