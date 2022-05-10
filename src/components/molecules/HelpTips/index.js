import React from "react";
import styled from "styled-components";
import Text from "../../atoms/Text";
import icon from "../../../assets/Icon.png";
const HelpTips = ({ data }) => {
  console.log(data);
  return (
    <Container>
      <ImageBg src={data.image} />
      <Wrapper>
        <Text color="white" className="padding-helptips">
          {data.title}
        </Text>
        <ImageIcon src={icon} />
      </Wrapper>
    </Container>
  );
};

export default React.memo(HelpTips);

const Container = styled.div`
  width: 300px;
  height: 200px;
  margin-right: 10px;
  margin-bottom: 10px;
  position: relative;
`;

const ImageBg = styled.img`
  width: 100%;
  height: 100%;
`;

const Wrapper = styled.div`
  width: 100%;
  height: 72px;
  background-color: rgba(0, 0, 0, 0.5);
  position: absolute;
  bottom: 0px;
  z-index: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;
const ImageIcon = styled.img`
  width: 32px;
  height: 32px;
  margin-right: 10px;
`;
