import { Link } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import "../../styles/Challenges.css";

const Challenges = () => {
  const { user } = useAuth();

  const challenges = [
    {
      id: 1,
      title: "30일 걷기 챌린지",
      description: "하루 10,000보 걷기",
      path: "/challenges/walking",
    },
    {
      id: 2,
      title: "건강 식단 챌린지",
      description: "매일 채소 5가지 먹기",
      path: "#",
    },
    {
      id: 3,
      title: "물 마시기 챌린지",
      description: "하루 2리터 물 마시기",
      path: "#",
    },
  ];

  return (
    <div className="challenges-container">
      <h2>모두 챌린지</h2>
      {user ? (
        <div className="challenges-list">
          {challenges.map(challenge => (
            <div key={challenge.id} className="challenge-item">
              <h3>{challenge.title}</h3>
              <p>{challenge.description}</p>
              <Link to={challenge.path}>
                <button>참여하기</button>
              </Link>
            </div>
          ))}
        </div>
      ) : (
        <p>로그인 후 챌린지에 참여할 수 있습니다.</p>
      )}
    </div>
  );
};

export default Challenges;
