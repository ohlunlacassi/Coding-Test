import styled from "styled-components";

const FormContainer = styled.div`
  background-color: var(--form-color);
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  width: 30rem;
  height: 35rem;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  @media (max-width: 768px) {
    width: 20rem;
    height: auto;
    top: 55%;
    left: 50%;
  }

  @media (min-width: 769px) and (max-width: 1023px) {
    width: 40rem;
  }
`;

export default FormContainer;
