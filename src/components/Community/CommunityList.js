import { useEffect, useState } from "react";
import api from "../../services/api";
import "../../style/Community.css";

const CommunityList = () => {
  const [communities, setCommunities] = useState([]);

  useEffect(() => {
    const fetchCommunities = async () => {
      const response = await api.get("/communities");
      setCommunities(response.data);
    };
    fetchCommunities();
  }, []);

  return (
    <div>
      <h2>Community List</h2>
      <ul>
        {communities.map(community => (
          <li key={community.id}>{community.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default CommunityList;
