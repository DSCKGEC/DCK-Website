import { Card } from "react-bootstrap";
import styled from "styled-components";
import theme from "./theme";

const BodyText = styled(Card.Body)`
  font-family: ${theme.fonts[0]};
  font-size: ${theme.fontSizes.sm};
  color: ${theme.colors.black};
  display: flex;
  padding: 0rem;
`;

export default BodyText;
