import { useParams } from "react-router-dom";
import "../../styles/CommunityDetail.css";

const mockCommunityDetails = {
  1: {
    name: "다이어트 지원 그룹",
    description: "다이어트를 함께 하는 사람들을 위한 그룹입니다.",
    members: 120,
    posts: [
      {
        id: 1,
        title: "다이어트 성공 후기",
        content: "이번 달에 5kg 감량에 성공했어요!",
      },
      {
        id: 2,
        title: "다이어트 식단 추천",
        content: "칼로리가 낮고 맛있는 식단을 공유합니다.",
      },
      // Add more posts as needed
    ],
  },
  2: {
    name: "운동 챌린지",
    description: "운동 목표를 공유하고 도전하는 그룹입니다.",
    members: 95,
    posts: [
      {
        id: 1,
        title: "매일 10,000보 걷기",
        content: "매일 10,000보 걷기 도전해봅시다!",
      },
      { id: 2, title: "플랭크 챌린지", content: "하루에 5분씩 플랭크 도전!" },
      // Add more posts as needed
    ],
  },
  // Add more community details as needed
};

const CommunityDetail = () => {
  const { id } = useParams();
  const community = mockCommunityDetails[id];

  if (!community) {
    return <div>커뮤니티를 찾을 수 없습니다.</div>;
  }

  return (
    <div className="community-detail-container">
      <h1>{community.name}</h1>
      <p>{community.description}</p>
      <p>멤버 수: {community.members}</p>
      <h2>게시물</h2>
      <ul>
        {community.posts.map(post => (
          <li key={post.id} className="community-post">
            <h3>{post.title}</h3>
            <p>{post.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CommunityDetail;
