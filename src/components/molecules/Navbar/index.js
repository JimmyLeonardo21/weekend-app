import styled from "styled-components";
import bitmap from "../../../assets/Bitmap.png";
import Text from "../../atoms/Text";
const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <WrapperImg>
          <Image src={bitmap} alt="Error" />
        </WrapperImg>
        <WrapperText>
          <Text weight="light">Good Morning</Text>
          <Text weight="bold">Fellas</Text>
        </WrapperText>
      </Wrapper>
    </Container>
  );
};

const Container = styled.div``;

const Wrapper = styled.div`
  display: flex;
`;
const WrapperImg = styled.div``;
const Image = styled.img`
  width: 33px;
  height: 33px;
  margin: 17px 13px 17px 213px;
  @media (max-width: 768px) {
    margin: 17px 13px 17px 24px;
  }
`;

const WrapperText = styled.div`
  margin-top: 17px;
`;

export default Navbar;
