import StyledForm from "../Layout/Form/StyledForm";
import FormContainer from "../Layout/Form/FormContainer";
import { useState } from "react";
import validator from "validator";
import ActionButton from "../Layout/ActionButton";

export default function RegisterForm() {
  const [message, setMessage] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    mobilephone: "",
    email: "",
    ref: "",
  });

  const validateEmail = (e) => {
    const email = e.target.value;
    const isEmailValid = validator.isEmail(email);

    setMessage(isEmailValid ? "" : "Please enter a valid e-mail!");
    setFormData({ ...formData, email });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const queryURL = `?ref=${formData.ref}&email=${formData.email}`;

    window.history.pushState({}, document.title, queryURL);
    window.alert("Form submitted successfully!");
  };

  return (
    <FormContainer>
      <StyledForm onSubmit={handleFormSubmit}>
        <h1>Register Form</h1>
        <label>
          Name <input name="name" placeholder="Enter your name" required />
        </label>
        <label>
          Surname{" "}
          <input name="surname" placeholder="Enter your surname" required />
        </label>
        <label>
          Mobile Phone
          <input
            name="mobilephone"
            type="text"
            pattern="0[0-9]{9}"
            placeholder="0123123121"
            maxLength="10"
            title="start the number with 0"
            required
          />
        </label>
        <label>
          E-mail
          <input
            name="email"
            type="text"
            placeholder="example@siamsquared.com"
            onChange={(e) => validateEmail(e)}
          />
        </label>
        <label>
          Ref{" "}
          <input
            name="ref"
            type="text"
            required
            onChange={(e) => setFormData({ ...formData, ref: e.target.value })}
          />
        </label>
        {message && <p style={{ color: "var(--danger-color)" }}>{message}</p>}
        <ActionButton type="submit">Submit</ActionButton>
      </StyledForm>
    </FormContainer>
  );
}
