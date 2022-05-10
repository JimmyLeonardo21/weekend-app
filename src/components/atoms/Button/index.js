import React from "react";
import styled from "styled-components";

const Button = ({ children }) => {
  return <ButtonMain>{children} </ButtonMain>;
};

export default React.memo(Button);

const ButtonMain = styled.button`
  background-color: "#ffffff";
  cursor: pointer;
  box-shadow: 0px 20px 30px rgba(249, 131, 171, 0.5);
  border-radius: 29px;
  padding: 20px 83.5px 19px 83.5px;
  font-size: 16px;
  font-weight: 400;
  text-align: center;
  margin-top: 220px;
  position: absolute;
  z-index: 1;
`;
