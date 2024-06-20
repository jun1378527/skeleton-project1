import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../../services/api";
import "../../style/Community.css";

const CommunityDetail = () => {
  const { id } = useParams();
  const [community, setCommunity] = useState(null);

  useEffect(() => {
    const fetchCommunity = async () => {
      const response = await api.get(`/communities/${id}`);
      setCommunity(response.data);
    };
    fetchCommunity();
  }, [id]);

  if (!community) return <div>Loading...</div>;

  return (
    <div>
      <h2>{community.name}</h2>
      <p>{community.description}</p>
    </div>
  );
};

export default CommunityDetail;
