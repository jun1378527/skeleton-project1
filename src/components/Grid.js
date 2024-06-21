import { useEffect } from "react";
import "../styles/Grid.css";
import img1 from "../assets/img/img1.jpg";
import img2 from "../assets/img/img2.jpg";
import img3 from "../assets/img/img3.jpg";
import img4 from "../assets/img/img4.jpg";
import img5 from "../assets/img/img5.jpg";

const Grid = () => {
  useEffect(() => {
    const handleScroll = () => {
      const gridContainers = document.querySelectorAll(
        ".grid-container, .grid-container2"
      );

      gridContainers.forEach(container => {
        const rect = container.getBoundingClientRect();
        const gridItems = container.querySelectorAll(".grid-item");
        gridItems.forEach(item => {
          const itemRect = item.getBoundingClientRect();
          if (
            itemRect.top < window.innerHeight * 0.75 &&
            itemRect.bottom > window.innerHeight * 0.25
          ) {
            item.classList.add("visible");
          } else {
            item.classList.remove("visible");
          }
        });
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // 초기 실행

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="main-content">
      <div className="grid-container">
        <div className="grid-item grid-item1 img1">
          <img src={img1} alt="Healthy Snacks" />
          <div className="overlay">
            <p className="img_caption1">Healthy Snacks</p>
            <a href="#" className="grid-btn">
              Discover More
            </a>
          </div>
        </div>
        <div className="grid-item grid-item1 img2">
          <img src={img2} alt="Community Walks" />
          <div className="overlay">
            <p className="img_caption1">Community Walks</p>
            <a href="#" className="grid-btn">
              Join Us
            </a>
          </div>
        </div>
        <div className="grid-item grid-item1 img3">
          <img src={img3} alt="Fitness Training" />
          <div className="overlay">
            <p className="img_caption2">Fitness Training</p>
            <a href="#" className="grid-btn2">
              Start Training <span>-></span>
            </a>
          </div>
        </div>
        <div className="grid-item grid-item1 img4">
          <img src={img4} alt="Yoga & Meditation" />
          <div className="overlay">
            <p className="img_caption2">Yoga & Meditation</p>
            <a href="#" className="grid-btn2">
              Learn More <span>-></span>
            </a>
          </div>
        </div>
        <div className="grid-item grid-item1 img5">
          <img src={img5} alt="Health Consultations" />
          <div className="overlay">
            <p className="img_caption2 black_caption">Health Consultations</p>
            <a href="#" className="grid-btn2 black_caption">
              Book Now <span>-></span>
            </a>
          </div>
        </div>
      </div>

      <div className="grid-container2">
        <div className="grid-item grid-item2 img1">
          <img src={img1} alt="Healthy Snacks" />
          <div className="overlay">
            <p className="img_caption1">Healthy Snacks</p>
            <a href="#" className="grid-btn">
              Discover More
            </a>
          </div>
        </div>
        <div className="grid-item grid-item2 img2">
          <img src={img2} alt="Community Walks" />
          <div className="overlay">
            <p className="img_caption1">Community Walks</p>
            <a href="#" className="grid-btn">
              Join Us
            </a>
          </div>
        </div>
        <div className="grid-item grid-item2 img3">
          <img src={img3} alt="Fitness Training" />
          <div className="overlay">
            <p className="img_caption2">Fitness Training</p>
            <a href="#" className="grid-btn2">
              Start Training <span>-></span>
            </a>
          </div>
        </div>
        <div className="grid-item grid-item2 img4">
          <img src={img4} alt="Yoga & Meditation" />
          <div className="overlay">
            <p className="img_caption2">Yoga & Meditation</p>
            <a href="#" className="grid-btn2">
              Learn More <span>-></span>
            </a>
          </div>
        </div>
        <div className="grid-item grid-item2 img5">
          <img src={img5} alt="Health Consultations" />
          <div className="overlay">
            <p className="img_caption2 black_caption">Health Consultations</p>
            <a href="#" className="grid-btn2 black_caption">
              Book Now <span>-></span>
            </a>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Grid;
