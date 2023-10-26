import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  :root {
    --primary-color: #118ab2;
    --danger-color: #9d0208;
    --form-color: #E8E8E9;
  }

  html {
    font-family: Arial, sans-serif;
    font-size: 16px;
  }

  body {
    margin: 0;
    background: linear-gradient(90deg, #a6c1ee 0%, #fbc2eb 100%);
    background: -moz-linear-gradient(90deg, #a6c1ee 0%, #fbc2eb 100%);
    background: -webkit-linear-gradient(90deg, #a6c1ee 0%, #fbc2eb 100%);
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#a6c1ee", endColorstr="#fbc2eb", GradientType=1);
    min-height: 110vh;
    }
  }
`;
