import React, { useEffect } from "react";
import styled from "styled-components";
import BG_1 from "../../../assets/BG_1.png";
import Text from "../../atoms/Text";
import bitmap1 from "../../../assets/Bitmap1.png";
import ButtonMain from "../../atoms/Button";
const SectionOne = () => {
  return (
    <Container>
      <WrapperText>
        <Text
          color="white"
          size="headerBiggest"
          weight="bolder"
          className="pt-84"
        >
          WEEKEND FROM HOME
        </Text>
        <Text color="white" className="mt-20 mb-67" size="header">
          Stay active with a litte workout
        </Text>
      </WrapperText>
      <WrapperImg>
        <Image src={bitmap1} alt="error" />
        <ButtonMain className="mt-220">Let's Go</ButtonMain>
      </WrapperImg>
    </Container>
  );
};

export default React.memo(SectionOne);

const Container = styled.div`
  background-image: url(${BG_1});
  background-position: center;
  width: 100vw;
  height: 1101px;
  background-repeat: no-repeat;
  background-size: cover;
  background-color: #eebece;
  padding-bottom: 41px;
`;

const WrapperText = styled.div`
  text-align: center;
`;

const WrapperImg = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 330px;
`;

const Image = styled.img`
  width: 184px;
  height: 345px;
  position: absolute;
  z-index: 1;
  /* margin-top: 300px; */
`;
