import styled from "styled-components";

const StyledCard = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;
  padding: 2rem;
  gap: 1rem;
  border-radius: 0.5rem;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  & > * {
    margin: 0;
  }

  max-width: 500px;
  height: auto;

  @media (max-width: 768px) {
    max-width: 350px;
    padding: 1rem;
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    max-width: 350px;
  }
`;

export default function Card({
  as = "article",
  gap = "1.5rem",
  padding = "1.5rem",
  children,
}) {
  return (
    <StyledCard as={as} $gap={gap} $padding={padding}>
      {children}
    </StyledCard>
  );
}
