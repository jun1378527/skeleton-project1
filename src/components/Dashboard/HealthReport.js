import { useState } from "react";
import "../../styles/HealthReport.css";

const mockHealthReports = [
  {
    date: "2024-06-01",
    weight: "70kg",
    bmi: "22.3",
    bloodPressure: "120/80",
    notes: "건강 상태 양호",
  },
  {
    date: "2024-06-08",
    weight: "69.5kg",
    bmi: "22.0",
    bloodPressure: "118/78",
    notes: "체중 감소, 혈압 정상",
  },
  // Add more reports as needed
];

const HealthReport = () => {
  const [healthReports, setHealthReports] = useState(mockHealthReports);

  return (
    <div className="health-report-container">
      <h1>건강 보고서</h1>
      {healthReports.map((report, index) => (
        <div key={index} className="health-report">
          <h2>날짜: {report.date}</h2>
          <p>체중: {report.weight}</p>
          <p>BMI: {report.bmi}</p>
          <p>혈압: {report.bloodPressure}</p>
          <p>메모: {report.notes}</p>
        </div>
      ))}
    </div>
  );
};

export default HealthReport;
