import styled from "styled-components";

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  & > * {
    margin: 0;
  }
  label {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    font-weight: bold;

    @media (max-width: 768px) {
      gap: 0.1rem;
    }

    @media (min-width: 769px) and (max-width: 1024px) {
      gap: 0.5rem;
    }
  }
  input {
    display: flex;
    align-items: center;
    height: 2.5rem;
    padding: 0 0.5rem;
    border-radius: 0.5rem;
    border: none;
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;

    @media (max-width: 768px) {
      gap: 0.5rem;
    }

    @media (min-width: 769px) and (max-width: 1024px) {
      gap: 1rem;
    }
  }
`;

export default function Form({ children, ...props }) {
  return <FormContainer {...props}>{children}</FormContainer>;
}
