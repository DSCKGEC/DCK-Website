import { Card } from "react-bootstrap";
import styled from "styled-components";
import theme from "./theme";

const SubTitle = styled(Card.Subtitle)`
  font-family: ${theme.fonts[0]};
  font-size: ${theme.fontSizes.sm};
  color: ${theme.colors.gray};
  display: flex;
  font-weight: 500;
  padding: 0rem;
  padding-bottom: 1rem;
`;

export default SubTitle;
