import React from "react";
import styled from "styled-components";

export const Profile = () => {
  return (
    <Wrapper>
      <Title>Ласкаво просимо в ваш профіль</Title>
      <Text>Тут в майбутньому буде зберігатися інформація про вас</Text>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  text-align: center;
  padding: 20px;
`;
const Title = styled.div`
  text-transform: uppercase;
  margin-top: 50px;
  margin-bottom: 20px;
  font-size: 40px;
  font-weight: 700;
`;
const Text = styled.div`
  font-size: 20px;
  line-height: 25px;
`;
