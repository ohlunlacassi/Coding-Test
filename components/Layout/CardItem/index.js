import React from "react";
import Image from "next/image";
import styled from "styled-components";
import ActionLink from "../ActionLink";

const CardItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 1rem;

  @media (max-width: 768px) {
    gap: 0.5rem;
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    gap: 1rem;
  }
`;

const StyledImage = styled(Image)`
  max-width: 100%;
  height: auto;

  @media (max-width: 768px) {
    max-width: 80%;
  }
`;

const CardItem = ({ fullname, company, url, businessType }) => {
  return (
    <CardItemContainer>
      <h2>{fullname}</h2>
      <StyledImage
        src="https://dummyimage.com/400x300.png"
        alt={`${company}'s image`}
        width={400}
        height={300}
        priority
      />
      <ActionLink href={url}>Visit Page</ActionLink>
      <p>{businessType}</p>
    </CardItemContainer>
  );
};

export default CardItem;
