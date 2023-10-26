import Link from "next/link";
import styled from "styled-components";

const ActionLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  border-radius: 0.5rem;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  font-weight: normal;
  padding: 0.5rem;
  width: 6rem;
  height: 2.5rem;
  font-size: 0.8rem;
  text-decoration: none;
  background-color: var(--primary-color);

  @media (max-width: 768px) {
    width: 5rem;
    height: 2rem;
    font-size: 0.7rem;
    position: relative;
    left: 5rem;
    margin-top: 1rem;
  }

  @media (min-width: 769px) and (max-width: 1200px) {
    width: 7rem;
    height: 3rem;
    font-size: 0.9rem;
    position: relative;
    left: 5rem;
  }

  @media (min-width: 1200px) {
    width: 7rem;
    height: 3rem;
    font-size: 0.9rem;
    position: relative;
    left: 9rem;
  }
`;

export default ActionLink;
