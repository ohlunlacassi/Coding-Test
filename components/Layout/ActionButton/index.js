import styled from "styled-components";

const ActionButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  background-color: var(--primary-color);
  border-radius: 0.5rem;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  font-weight: normal;
  padding: 0.5rem;
  height: 2.5rem;
  font-size: 1rem;
  text-decoration: none;
  border: none;

  @media (max-width: 768px) {
    height: 2rem;
    font-size: 0.9rem;
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    height: 3rem;
    font-size: 1.1rem;
  }
`;

export default ActionButton;
