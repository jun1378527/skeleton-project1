import { useState } from "react";
import "../../style/Dashboard.css";

const Diet = () => {
  const [diet, setDiet] = useState([]);

  // 식단 정보 입력 폼과 목록 표시
  return (
    <div>
      <h2>Diet</h2>
      {/* 식단 정보 입력 폼 */}
      <ul>
        {diet.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default Diet;
