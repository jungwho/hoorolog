import { ImgProps } from "./types";
import styled from "@emotion/styled";

const ImgContainer = (props: ImgProps) => {
  return (
    <Container
      isHover={props.isHover}
      imgSrc={`/images/home/${props.navName}.png`}
    />
  );
};
export default ImgContainer;

const Container = styled.div<{ isHover: boolean; imgSrc: string }>`
  position: absolute;
  width: 100%;
  height: 100vh;
  top: 0;
  right: 0;
  transform: ${({ isHover }) =>
    isHover ? "translateX(0)" : "translateX(100%)"};
  opacity: ${({ isHover }) => (isHover ? 1 : 0)};
  transition: transform 1s ease-in-out, opacity 1s ease-in-out;
  background-size: cover;
  background-position: center;
  background-image: ${({ imgSrc }) => (imgSrc ? `url(${imgSrc})` : "none")};
`;
