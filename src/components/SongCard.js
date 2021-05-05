import React from "react";
import styled from "styled-components";

const Card = styled.div`
  background-color: var(--secondary-color);
  border: 1px solid var(--primary-color);
  border-radius: 3px;
  flex: 0 0 10rem;
  margin: 1rem;
`;

const CardImg = styled.img`
  padding: 0.5rem;
`;

const CardContent = styled.div`
  color: #333;
  text-align: center;
  padding: 0 0.5rem 0.5rem;
  font-size: 1.2rem;
  font-weight: 700;
`;

const SongCard = ({ data }) => {
  return (
    <Card>
      <CardImg src={data.artworkUrl100} />
      <CardContent>{data.collectionName}</CardContent>
    </Card>
  );
};

export default SongCard;
