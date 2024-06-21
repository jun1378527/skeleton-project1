import { useState } from "react";
import "../../styles/Diet.css";

const mockDietPlans = [
  {
    day: "월요일",
    meals: [
      { name: "아침", description: "과일을 곁들인 오트밀", calories: 300 },
      { name: "점심", description: "구운 치킨 샐러드", calories: 500 },
      { name: "저녁", description: "퀴노아와 함께 찐 야채", calories: 400 },
    ],
  },
  {
    day: "화요일",
    meals: [
      { name: "아침", description: "꿀을 곁들인 그릭 요거트", calories: 250 },
      {
        name: "점심",
        description: "아보카도를 곁들인 터키 샌드위치",
        calories: 450,
      },
      { name: "저녁", description: "현미와 함께 구운 연어", calories: 500 },
    ],
  },
  // Add more days as needed
];

const Diet = () => {
  const [dietPlans, setDietPlans] = useState(mockDietPlans);

  return (
    <div className="diet-container">
      {dietPlans.map((plan, index) => (
        <div key={index} className="diet-plan">
          <h2>{plan.day}</h2>
          <ul>
            {plan.meals.map((meal, mealIndex) => (
              <li key={mealIndex} className="meal">
                <h3>{meal.name}</h3>
                <p>{meal.description}</p>
                <p>{meal.calories} 칼로리</p>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Diet;
