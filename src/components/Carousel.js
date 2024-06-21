import React, { useEffect } from "react";
import "../styles/Carousel.css";
import img1 from "../assets/img/carousel_img1.jpg"; // 사용자 업로드 이미지
import img2 from "../assets/img/carousel_img2.jpg"; // 사용자 업로드 이미지
import img3 from "../assets/img/carousel_img3.jpg"; // 사용자 업로드 이미지
import leftArrow from "../assets/img/left.png";
import rightArrow from "../assets/img/right.png";

const Carousel = () => {
  useEffect(() => {
    const indicators = document.querySelectorAll(".indicator");
    let currentIndex = 1;
    const items = document.querySelectorAll(".carousel-item");
    const totalItems = items.length;
    const carouselInner = document.querySelector(".carousel-inner");

    const firstClone = items[0].cloneNode(true);
    const lastClone = items[totalItems - 1].cloneNode(true);
    firstClone.classList.add("clone");
    lastClone.classList.add("clone");

    carouselInner.appendChild(firstClone);
    carouselInner.insertBefore(lastClone, items[0]);

    const updatedItems = document.querySelectorAll(".carousel-item");
    const updatedTotalItems = updatedItems.length;
    carouselInner.style.transition = "none";
    carouselInner.style.transform = `translateX(-${100}%)`;

    const nextButton = document.querySelector(".carousel-control-next");
    const prevButton = document.querySelector(".carousel-control-prev");

    nextButton.addEventListener("click", moveToNextSlide);
    prevButton.addEventListener("click", moveToPrevSlide);

    function updateIndicators() {
      indicators.forEach((indicator, index) => {
        if (index === currentIndex - 1) {
          indicator.classList.add("active");
        } else {
          indicator.classList.remove("active");
        }
      });
    }

    function moveToNextSlide() {
      if (currentIndex >= updatedTotalItems - 1) return;
      currentIndex++;
      carouselInner.style.transition = "transform 0.5s ease-in-out";
      carouselInner.style.transform = `translateX(-${100 * currentIndex}%)`;

      carouselInner.addEventListener(
        "transitionend",
        function () {
          if (currentIndex === updatedTotalItems - 1) {
            carouselInner.style.transition = "none";
            currentIndex = 1;
            carouselInner.style.transform = `translateX(-${
              100 * currentIndex
            }%)`;
          }
          updateIndicators();
        },
        { once: true }
      );
    }

    function moveToPrevSlide() {
      if (currentIndex <= 0) return;
      currentIndex--;
      carouselInner.style.transition = "transform 0.5s ease-in-out";
      carouselInner.style.transform = `translateX(-${100 * currentIndex}%)`;

      carouselInner.addEventListener(
        "transitionend",
        function () {
          if (currentIndex === 0) {
            carouselInner.style.transition = "none";
            currentIndex = updatedTotalItems - 2;
            carouselInner.style.transform = `translateX(-${
              100 * currentIndex
            }%)`;
          }
          updateIndicators();
        },
        { once: true }
      );
    }

    updateIndicators();

    return () => {
      nextButton.removeEventListener("click", moveToNextSlide);
      prevButton.removeEventListener("click", moveToPrevSlide);
    };
  }, []);

  return (
    <header className="header">
      <div className="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={img1} alt="Healthy Foods" />
            <div className="carousel-caption">
              <p>HEALTHY & NUTRITIOUS</p>
              <h1>Personalized Diet Plans</h1>
              <p>
                Discover a variety of nutritious foods tailored to your health
                goals.
              </p>
              <button className="carousel-btn">Explore Diet Plans</button>
            </div>
          </div>
          <div className="carousel-item">
            <img src={img2} alt="Exercise" />
            <div className="carousel-caption">
              <h1>Stay Active</h1>
              <p>
                Join our community events and stay motivated with group
                workouts.
              </p>
              <button className="carousel-btn">Join Community</button>
            </div>
          </div>
          <div className="carousel-item">
            <img src={img3} alt="Health Support" />
            <div className="carousel-caption">
              <p>SUPPORT & CARE</p>
              <h1>Comprehensive Health Monitoring</h1>
              <p>
                Get personalized health recommendations and track your progress.
              </p>
              <button className="carousel-btn">Get Started</button>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          role="button"
          data-slide="prev"
        >
          <img
            src={leftArrow}
            alt="Previous"
            className="carousel-control-prev-icon"
          />
        </button>
        <button
          className="carousel-control-next"
          role="button"
          data-slide="next"
        >
          <img
            src={rightArrow}
            alt="Next"
            className="carousel-control-next-icon"
          />
        </button>
        <div className="carousel-indicators">
          <span className="indicator active"></span>
          <span className="indicator"></span>
          <span className="indicator"></span>
        </div>
      </div>
    </header>
  );
};

export default Carousel;
