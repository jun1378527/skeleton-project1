import "../../styles/WalkingChallenge.css";

// 프로필 이미지 import
import profile1 from "../../assets/img/profile1.jpg";
import profile2 from "../../assets/img/profile2.jpg";
import profile3 from "../../assets/img/profile3.jpg";
import profile4 from "../../assets/img/profile4.jpg";

const totalDistance = 30; // 목표 거리 (예: 30km)
const participants = [
  { name: "User 1", distance: 10, img: profile1 },
  { name: "User 2", distance: 20, img: profile2 },
  { name: "User 3", distance: 30, img: profile3 },
  { name: "User 4", distance: 15, img: profile4 },
];

const WalkingChallenge = () => {
  return (
    <div className="challenge-container">
      <div className="challenge-header">
        <h1>30일 걷기 챌린지</h1>
      </div>
      <svg
        className="challenge-path"
        viewBox="0 0 1000 500"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M 50 50 Q 250 150 450 50 T 850 450"
          stroke="#3572EF"
          strokeWidth="4"
          fill="transparent"
          id="path"
        />
        {participants.map((participant, index) => {
          const progress = Math.min(participant.distance / totalDistance, 1);
          const animationDuration = `${progress * 5}s`; // 애니메이션 시간을 설정합니다.
          return (
            <image
              key={index}
              href={participant.img}
              className="profile-icon"
              width="30"
              height="30"
            >
              <animateMotion
                dur={animationDuration}
                fill="freeze"
                keyPoints={`0;${progress}`}
                keyTimes="0;1"
              >
                <mpath href="#path" />
              </animateMotion>
            </image>
          );
        })}
      </svg>
      <div className="goal-label">GOAL</div>
      <div className="achievement-list">
        <h2>목표 달성!</h2>
        <ul>
          {participants
            .filter(participant => participant.distance >= totalDistance)
            .map((participant, index) => (
              <li key={index}>{participant.name}</li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default WalkingChallenge;
