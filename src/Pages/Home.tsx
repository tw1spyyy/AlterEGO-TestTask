import React from "react";
import styled from "styled-components";
import { AppContext } from "../App";

export const Home = () => {
  const { isAuth } = React.useContext(AppContext);

  return (
    <Wrapper>
      <Title>Ласкаво просимо на головну сторінку</Title>
      {isAuth ? (
        <Text>
          МИ - АГЕНТСТВО БЕЗ ЗАЙВОГО ПАФОСУ ТА СЛОВА "НЕМОЖЛИВО" В ЛЕКСИКОНІ.
          КЛЮЧОВІ СПЕЦІАЛІЗАЦІЇ: РІШЕННЯ ДЛЯ ІНТЕРНЕТ-МАГАЗИНІВ, ФІНАНСОВИХ
          ОРГАНІЗАЦІЙ, ТОРГІВЕЛЬНО-РОЗВАЖАЛЬНИХ ЦЕНТРІВ, АУДИТ ПРОДУКТИВНОСТІ,
          ОПТИМІЗАЦІЯ ТА ПРИСКОРЕННЯ САЙТІВ.
        </Text>
      ) : (
        <Login>Увійдіть щоб отримати більше інформації</Login>
      )}
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

const Login = styled.div`
  color: red;
  font-weight: 600;
  font-size: 30px;
`;
