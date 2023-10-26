import Link from "next/link";
import styled from "styled-components";

const StyledNav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1rem;
  height: 3rem;
  font-weight: bold;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
  cursor: pointer;
  margin: 0 1rem;

  @media (max-width: 768px) {
    font-size: 0.9rem;
    margin: 0 0.5rem;
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    font-size: 1rem;
    margin: 0 1rem;
  }
`;

export default function Nav() {
  return (
    <StyledNav>
      <StyledLink href="/">Home</StyledLink>
      <StyledLink href="/register">Register</StyledLink>
    </StyledNav>
  );
}
