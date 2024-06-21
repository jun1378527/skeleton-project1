// Mock 데이터
const mockCommunities = [
  {
    id: 1,
    name: "Fitness Enthusiasts",
    description: "A community for fitness lovers.",
  },
  {
    id: 2,
    name: "Healthy Eating",
    description: "Share and find healthy recipes.",
  },
];

const mockHealthReports = [
  { id: 1, date: "2023-01-01", report: "All good" },
  { id: 2, date: "2023-01-02", report: "Feeling better" },
];

// Mock API 호출 함수
export const fetchCommunities = async () => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({ data: mockCommunities });
    }, 500); // 500ms 지연 후 Mock 데이터 반환
  });
};

export const fetchHealthReports = async () => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({ data: mockHealthReports });
    }, 500); // 500ms 지연 후 Mock 데이터 반환
  });
};
