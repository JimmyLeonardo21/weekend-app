import React from "react";
import styled from "styled-components";

const Text = ({ children, ...rest }) => {
  return <Container {...rest}>{children}</Container>;
};
Text.defaultProps = {
  size: "normal",
  weight: "normal",
  color: "textSoft",
};

export default React.memo(Text);
const Container = styled.p`
  font-weight: ${({ theme: { fontWeights }, weight }) => fontWeights[weight]};
  font-size: ${({ theme: { fontSizes }, size }) => fontSizes[size]};
  color: ${({ theme: { colors }, color }) => colors[color]};
  @media (max-width: 768px) {
    font-size: ${({ theme: { smallScreenFontSizes }, size }) =>
      smallScreenFontSizes[size]};
  }
`;
