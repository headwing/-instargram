import { isClickableInput } from "@testing-library/user-event/dist/utils";
import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import ButtonLayout from "../components/ButtonsLayout";
import DetailModal from "../components/DetailModal";
import CommentInput from "../components/CommentInput";
import MoreButtonsModal from "../components/MoreButtonsModal";
import { useDispatch, useSelector } from "react-redux";
import { __getPosts } from "../Redux/modules/postSlice";
import { useNavigate } from "react-router-dom";
import PostTop from "../components/PostTop";
import PostBottom from "../components/PostBottom";
import { __getComment } from "../Redux/modules/commentSlice";

const Main = (post) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { posts } = useSelector((state) => state.post);

  // 호출 시 사용!!!
  useEffect(() => {
    dispatch(__getPosts());
  }, [dispatch]);


  return (
    <Total>
      {posts.map((post) => {
        return (
          <>
            <Post key={post.postId}>
              <PostTop post= {post} />
              <PostBottom inputTagWidth="355px" postId={post.postId} />
            </Post>
          </>
        );
      })}
    </Total>
  );
};
const Total = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: -40px;
  font-size: 14px;
`;

const Post = styled.div`
  z-index: 0;
  width: 470px;
  border: 1px solid rgb(0, 0, 0, 0.2);
  border-radius: 10px;
  background-color: white;
`;

export default Main;
