import styled from "styled-components";

const StyledFlex = styled.div`
  display: flex;
  flex: 1;
  padding: 1.3rem;
  gap: 4rem;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    gap: 2rem;
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    gap: 3rem;
  }
`;

export default function Flex(props) {
  return <StyledFlex {...props} />;
}
