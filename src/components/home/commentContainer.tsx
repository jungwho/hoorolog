import styled from "@emotion/styled";
import { useStore } from "../store";

const CommentContainer = () => {
  const { isHover, navList, navIndex } = useStore();
  return <Container isHover={isHover}>{navList[navIndex]?.comment}</Container>;
};

export default CommentContainer;

const Container = styled.div<{ isHover: boolean }>`
  top: 57vh;
  position: absolute;
  opacity: ${({ isHover }) => (isHover ? 1 : 0)};
  transition: opacity 1s ease-in-out;
  font-size: calc(16px + 1vw);
  font-family: gsM;
`;
