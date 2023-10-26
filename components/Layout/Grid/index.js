import styled from "styled-components";

const Grid = styled.div`
  display: grid;
  grid-gap: 2.5rem;
  grid-template-columns: repeat(3, 1fr);

  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
    grid-gap: 1.5rem;
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 2rem;
  }
`;

export default Grid;
