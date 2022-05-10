import React from "react";
import styled from "styled-components";
import Text from "../../atoms/Text";
import bitmap2 from "../../../assets/Bitmap2.png";
import path from "../../../assets/Path.png";
import oval from "../../../assets/Oval.png";
const SectionTwo = () => {
  return (
    <Container>
      <WrapperImg>
        <Image src={bitmap2} alt="error" />
        <ImagePath src={path} alt="error" />
      </WrapperImg>
      <Wrapper>
        <WrapperText>
          <Text className="align-right lh-32" size="header">
            <Span>Definition; </Span>a practice or exercise to test or improve
            one's fitness for athletic competition, ability, or performance to
            exhaust (something, such as a mine) by working to devise, arrange,
            or achieve by resolving difficulties. Merriam-Webster.com
            Dictionary.
            <Text color="white" size="header" className="mt-30">
              -weekend team
            </Text>
          </Text>
        </WrapperText>
      </Wrapper>
      <Testimoni>
        <ImageDot src={oval} alt="error" />
        <Text color="white" weight="bolder" size="bigIcon">
          Testimonial
        </Text>
      </Testimoni>
    </Container>
  );
};

const Container = styled.div`
  background-color: #eebece;
`;

const WrapperImg = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const Image = styled.img`
  position: absolute;
  z-index: 1;
`;
const ImagePath = styled.img``;

const WrapperText = styled.div`
  display: flex;
  justify-content: center;
  width: 619px;
  height: 160px;
  padding: 63px 32px 0px 32px;
`;
const Span = styled.span`
  color: #0b24fb;
  font-weight: 700;
`;

const ImageDot = styled.img`
  padding-right: 217px;
  width: 89px;
  height: 89px;
  @media (max-width: 768px) {
    margin-bottom: -20px;
    margin-left: 20px;
  }
`;

const Testimoni = styled.div`
  display: flex;
  justify-content: center;
  align-items: Center;
  padding-bottom: 97px;
  flex-wrap: wrap;
  margin-top: 84px;
  width: 100%;
  @media (max-width: 768px) {
    justify-content: left;
    margin-top: 200px;
    margin-left: 57px;
  }
`;
export default React.memo(SectionTwo);
