import styled from "styled-components";

const StyledHero = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 2rem;
  & > * {
    margin: 0;
  }

  h1 {
    font-size: 4rem;
  }

  p {
    font-size: 2rem;
    line-height: 3rem;
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 3rem;
    }

    p {
      font-size: 1.5rem;
      line-height: 2.5rem;
    }
  }
`;

export default function Hero() {
  return (
    <StyledHero>
      <h1>Company List</h1>
      <p>Here you can find our partners!</p>
    </StyledHero>
  );
}
