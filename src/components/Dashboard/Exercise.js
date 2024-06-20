import { useState } from "react";
import "../../style/Dashboard.css";

const Exercise = () => {
  const [exercise, setExercise] = useState([]);

  // 운동 정보 입력 폼과 목록 표시
  return (
    <div>
      <h2>Exercise</h2>
      {/* 운동 정보 입력 폼 */}
      <ul>
        {exercise.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default Exercise;
