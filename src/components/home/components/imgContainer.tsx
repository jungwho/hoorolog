import styled from "@emotion/styled";
import { useStore } from "../../store";

const ImgContainer = () => {
  const { navList, navIndex, isHover } = useStore();
  return (
    <Container
      isHover={isHover}
      imgSrc={`/images/home/${navList[navIndex]?.name}.png`}
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
  transition: transform 0.75s ease-in-out, opacity 1s ease-in-out;
  background-size: cover;
  background-position: center;
  background-image: ${({ imgSrc }) => (imgSrc ? `url(${imgSrc})` : "none")};
`;
