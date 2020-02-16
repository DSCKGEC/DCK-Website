import { Card } from "react-bootstrap";
import styled from "styled-components";
import theme from "./theme";

const Title = styled(Card.Title)`
  font-family: ${theme.fonts[0]};
  font-size: ${theme.fontSizes.lg};
  color: ${theme.colors.black};
  display: flex;
  font-weight: 550;
`;

export default Title;
