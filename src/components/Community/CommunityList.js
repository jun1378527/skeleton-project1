import { Link } from "react-router-dom";
import "../../styles/CommunityList.css";

const mockCommunities = [
  {
    id: 1,
    name: "다이어트 지원 그룹",
    description: "다이어트를 함께 하는 사람들을 위한 그룹입니다.",
    members: 120,
  },
  {
    id: 2,
    name: "운동 챌린지",
    description: "운동 목표를 공유하고 도전하는 그룹입니다.",
    members: 95,
  },
  // 목업 추가 이쪽으로 나중에 설정 해야함
];

const CommunityList = () => {
  return (
    <div className="community-list-container">
      <h1>커뮤니티 목록</h1>
      {mockCommunities.map(community => (
        <div key={community.id} className="community-item">
          <h2>{community.name}</h2>
          <p>{community.description}</p>
          <p>멤버 수: {community.members}</p>
          <Link to={`/communities/${community.id}`} className="community-link">
            자세히 보기
          </Link>
        </div>
      ))}
    </div>
  );
};

export default CommunityList;
