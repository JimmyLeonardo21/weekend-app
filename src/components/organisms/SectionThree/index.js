import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { getTestimonial } from "../../../utils/apiList/testimonial";
import { getHelpTips } from "../../../utils/apiList/helpTips";
import Text from "../../atoms/Text";
import Card from "../../molecules/Card";
import HelpTips from "../../molecules/HelpTips";
import path1 from "../../../assets/Path1.png";
import bitmap3 from "../../../assets/Bitmap3.png";
import path3 from "../../../assets/Path3.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
const SectionThree = () => {
  const [testimoni, setTestimoni] = useState([]);
  const [helpTips, setHelpTips] = useState([]);
  useEffect(() => {
    getTestimonial().then(({ data }) => {
      setTestimoni(data);
    });
  }, []);
  useEffect(() => {
    getHelpTips().then(({ data }) => {
      setHelpTips(data);
    });
  }, []);
  const settingss = {
    className: "center",
    centerMode: true,
    focusOnSelect: true,
    infinite: true,
    slidesToShow: 2,
    centerPadding: "54px",
    speed: 500,
    responsive: [
      {
        breakpoint: 780,
        settings: {
          slidesToShow: 1,
          infinite: true,
          dots: true,
          initialSlide: 0,
          centerPadding: "-10px",
        },
      },
    ],
  };
  return (
    <Container>
      <WrapperContent>
        <Content>
          <Slider {...settingss}>
            {testimoni.map((data) => {
              return <Card key={data.id} data={data} />;
            })}
          </Slider>
        </Content>
      </WrapperContent>
      <Wrapper>
        <WrapperText>
          <Text color="white" className="align-center">
            POV
          </Text>
          <Paragraf>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud ullamco laboris nisi ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit
            esse cillum dolore eu fugiat nulla pariatur.
          </Paragraf>
        </WrapperText>
        <WrapperText>
          <Text color="white" className="align-center">
            Resource
          </Text>
          <Paragraf>
            These cases are perfectly simple and easy to distinguish. In a free
            hour, when our power of choice is untrammelled and when nothing
            prevents our being able to do what we like best
          </Paragraf>
        </WrapperText>
      </Wrapper>
      <Text color="white" size="bigIcon" className="align-center mt-33 mb-32">
        Help Tips
      </Text>
      <WrapperHelpTips>
        <ImagePath3 src={path3} alt="error" />
        {helpTips.map((data) => {
          return <HelpTips key={data.id} data={data} />;
        })}
      </WrapperHelpTips>
      <WrapperEnd>
        <Text weight="bolder" color="white" size="bigIcon">
          You're all set
        </Text>
        <Paragraf>
          The wise man therefore always holds in these matters to this principle
          of selection.
        </Paragraf>
      </WrapperEnd>
      <WrapperImg>
        <ImagePath1 src={path1} alt="error" />
        <ImageBitmap3 src={bitmap3} alt="error" />
      </WrapperImg>
      <Footer>
        <WrapperFooterText>
          <Text weight="bold" color="white" size="normal">
            wknd@
          </Text>
          <Text weight="light" color="white" size="normal">
            2020
          </Text>
        </WrapperFooterText>
        <Version>
          <Text className="padding-version" color="white" weight="lightest">
            alpha version 0.1
          </Text>
        </Version>
      </Footer>
    </Container>
  );
};

export default React.memo(SectionThree);

const Container = styled.div`
  background-color: black;
  position: absolute;
  /* margin-top: -100px; */
`;

const Content = styled.div`
  height: 200px;
  width: 780px;
  @media (max-width: 768px) {
    width: 200px;
  }
`;
const WrapperContent = styled.div`
  display: flex;
  justify-content: center;
  margin-top: -60px;
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const WrapperText = styled.div`
  margin-top: 67px;
  width: clamp(150px, 100%, 400px);
  margin: 0px 32px 0px 32px;
`;

const WrapperHelpTips = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const WrapperEnd = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 67px;
`;

const Footer = styled.div`
  display: flex;
  background-color: #0b24fb;
  width: 100%;
  height: 67px;
  align-items: center;
  justify-content: space-around;
`;

const WrapperFooterText = styled.div`
  display: flex;
`;

const Version = styled.div`
  border: 1px solid #ffffff;
  border-radius: 12px;
`;

const WrapperImg = styled.div`
  width: 100%;
  display: flex;
  justify-content: start;
  margin-top: -100px;
  @media (max-width: 768px) {
    text-align: left;
    margin-right: 32px;
    margin-top: 30px;
  }
`;

const ImagePath1 = styled.img`
  width: 244px;
  height: 290px;
  /* position: absolute; */
`;

const ImageBitmap3 = styled.img`
  margin-top: -30px;
  width: 137px;
  height: 227px;
  margin-left: 31px;
  position: absolute;
`;

const Paragraf = styled.p`
  color: white;
  margin-top: 30px;
  font-weight: 400;
  font-size: 18px;
  line-height: 27px;
  text-align: center;
  margin-bottom: 67px;
  @media (max-width: 768px) {
    text-align: left;
    margin-right: 32px;
    margin-left: 32px;
  }
`;

const ImagePath3 = styled.img`
  position: absolute;
  width: 159px;
  height: 195px;
  margin-left: 950px;
  margin-top: -60px;
  @media (max-width: 1115px) {
    width: 0px;
    height: 0px;
  }
`;
