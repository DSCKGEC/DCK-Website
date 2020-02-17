import styled from "styled-components";

const Button = styled.button`
  /* Adapt the colors based on primary prop */
  background: #536dfe;
  color: white;

  font-size: 1em;
  margin: 1em;
  padding: 0.5em 1em;
  border: 2px solid #536dfe;
  border-radius: 3px;
  align-self: center;
  box-shadow: 0 5px 5px 0 rgba(156, 39, 176, 0.14),
    0 1px 1px -6px rgba(156, 39, 176, 0.2);

  &:hover {
    box-shadow: 0 14px 26px -12px rgba(156, 39, 176, 0.42),
      0 4px 23px 0px rgba(0, 0, 0, 0.12),
      0 8px 10px -5px rgba(156, 39, 176, 0.2);
  }
  &: focus,
  &: active {
    outline: none;
  }
  &: after {
    display: none !important;
  }
`;

export default Button;
