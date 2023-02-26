import React from "react";
import { AppContext } from "../App";
import styled from "styled-components";
import { deletePost } from "../Redux/slices/newsSlice";
import { Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { INew } from "../utils/types";
export const News = () => {
  const { news, setNewsLimit } = React.useContext(AppContext);

  const dispatch = useDispatch();

  const onPostDelete = (id: number) => {
    dispatch(deletePost(id));
  };

  return (
    <Wrapper>
      <WrapperTitle>News</WrapperTitle>
      {news.map((el: INew) => {
        return (
          <Post key={el.id}>
            <PostNumber>{el.id}</PostNumber>
            <div style={{ width: "100%" }}>
              <PostTitle>{el.title}</PostTitle>
              <PostText>{el.body}</PostText>
            </div>
            <PostButtonWrapper>
              <Button onClick={() => onPostDelete(el.id)} variant="contained">
                Delete
              </Button>
            </PostButtonWrapper>
          </Post>
        );
      })}
      <ButtonWrapper>
        <Button
          onClick={() => setNewsLimit((value) => (value += 5))}
          variant="contained"
        >
          More news..
        </Button>
      </ButtonWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 10px;
`;

const WrapperTitle = styled.h2`
  font-size: 40px;
  line-height: 40px;
  text-align: center;
  margin: 10px 0 20px;
  width: 100%;
`;

const PostNumber = styled.div`
  border-right: 1px solid #000;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 40px;
  max-width: 60px;
  width: 100%;
`;

const Post = styled.div`
  border: 1px solid #000;
  margin-bottom: 15px;
  display: flex;
`;
const PostTitle = styled.div`
  border-bottom: 1px solid #000;
  padding: 5px;
  font-weight: 700;
`;
const PostText = styled.div`
  padding: 5px;
`;
const ButtonWrapper = styled.div`
  padding: 20px 0 40px;
  text-align: center;
`;

const PostButtonWrapper = styled.div`
  border-left: 1px solid #000;
  width: 140px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
