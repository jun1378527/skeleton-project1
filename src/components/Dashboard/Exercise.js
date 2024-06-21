import { useState } from "react";
import "../../styles/Exercise.css";

const mockExercisePlans = [
  {
    day: "월요일",
    exercises: [
      { name: "조깅", description: "30분 조깅", duration: "30분" },
      { name: "팔 굽혀 펴기", description: "3세트, 각 15회", duration: "15분" },
      { name: "복근 운동", description: "3세트, 각 20회", duration: "20분" },
    ],
  },
  {
    day: "화요일",
    exercises: [
      {
        name: "자전거 타기",
        description: "40분 자전거 타기",
        duration: "40분",
      },
      { name: "스쿼트", description: "3세트, 각 20회", duration: "20분" },
      { name: "플랭크", description: "3세트, 각 1분", duration: "10분" },
    ],
  },
  // Add more days as needed
];

const Exercise = () => {
  const [exercisePlans, setExercisePlans] = useState(mockExercisePlans);

  return (
    <div className="exercise-container">
      {exercisePlans.map((plan, index) => (
        <div key={index} className="exercise-plan">
          <h2>{plan.day}</h2>
          <ul>
            {plan.exercises.map((exercise, exerciseIndex) => (
              <li key={exerciseIndex} className="exercise">
                <h3>{exercise.name}</h3>
                <p>{exercise.description}</p>
                <p>소요 시간: {exercise.duration}</p>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Exercise;
