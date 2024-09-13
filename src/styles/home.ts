import styled from "@emotion/styled";

export const Container = styled.div`
  background-color: black;
  width: 100vw;
  height: 100vh;
  display: flex;
`;

export const NavContainer = styled.div<{ isHover: boolean }>`
  width: 58%;
  height: 100vh;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 10vw;
  background-color: ${({ isHover }) => (isHover ? "white" : "black")};
  transition: background-color 1.5s ease-in-out;
`;

export const SignContainer = styled.div`
  position: absolute;
  top: 40vh;
  right: 10vw;
  color: white;
  font-family: "gsL";
  font-size: 1.5vw;
`;

export const NavItem = styled.div<{ isHover: boolean }>`
  color: ${({ isHover }) => (isHover ? "black" : "white")};
  transition: color 1.5s ease-in-out;
  font-size: 4.5vw;
  margin: 15px 0px 0px;
`;

export const ImgContainer = styled.div<{
  isHover: boolean;
  imgSrc: string | null;
}>`
  width: 42%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-size: cover;
  background-position: center;
  background-image: ${({ imgSrc }) => (imgSrc ? `url(${imgSrc})` : "none")};
`;
