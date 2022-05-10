import React from "react";
import styled from "styled-components";
import Text from "../../atoms/Text";
const Card = ({ data }) => {
  return (
    <Container>
      <Text className="pt-20 pl-20" weight="bolder">
        {data.by}
      </Text>
      <Content>
        <Text className="pt-card" weight="light">
          {data.testimony}
        </Text>
      </Content>
    </Container>
  );
};

export default React.memo(Card);

const Container = styled.div`
  background-color: #ffffff;
  width: 280px;
  height: 150px;
`;

const Content = styled.div`
  @media (max-width: 768px) {
    width: fit-content;
    height: 150px;
  }
`;
