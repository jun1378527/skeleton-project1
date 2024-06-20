import { useState } from "react";
import "../../style/Dashboard.css";

const HealthReport = () => {
  const [report, setReport] = useState([]);

  // 건강 상황 보고서 입력 폼과 목록 표시
  return (
    <div>
      <h2>Health Report</h2>
      {/* 건강 상황 보고서 입력 폼 */}
      <ul>
        {report.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default HealthReport;
