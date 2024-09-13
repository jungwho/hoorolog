import styled from "@emotion/styled";
import { colors } from "../../styles/color";
import ImgContainer from "./imgContainer";
import { CircleSVG } from "../../styles/components/svg";
import { HomeUIProps } from "./types";
import SignContainer from "./signContainer";

const HomeUI = (props: HomeUIProps) => {
  const navList = [
    {
      name: "hoo",
      text: "HOO",
    },
    {
      name: "ro",
      text: "RO",
    },
    {
      name: "log",
      text: "LOG",
    },
  ];
  return (
    <Container isHover={props.isHover}>
      <LeftContainer>
        <SignContainer />
        {navList.map((nav, index) => (
          <>
            <NavItem
              key={nav.name}
              hoverColor={colors[nav.name]}
              onClick={() => props.onClickNav(nav.name)}
              onMouseEnter={() => props.handleMouseEnter(nav.name)}
              onMouseLeave={props.handleMouseLeave}
              isHover={props.isHover}
            >
              {nav.text}
            </NavItem>
            {index < 2 && (
              <CircleSVG
                size={8}
                color={props.isHover ? "black" : "white"}
                style={{
                  transition: "fill 1s ease-in-out",
                }}
              />
            )}
          </>
        ))}
      </LeftContainer>
      <RightContainer>
        <HomeImg
          width={175}
          src="/images/home/hoorolog.png"
          isHover={props.isHover}
        />
        <ImgContainer navName={props.navName} isHover={props.isHover} />
      </RightContainer>
    </Container>
  );
};

export default HomeUI;

const Container = styled.div<{ isHover: boolean }>`
  width: 100vw;
  height: 100vh;
  background-color: ${({ isHover }) => (isHover ? "white" : "black")};
  transition: background-color 1s ease-in-out;
  display: flex;
`;

const LeftContainer = styled.div`
  position: relative;
  width: 57.5vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 9vw;
`;

const NavItem = styled.div<{ hoverColor: string; isHover: boolean }>`
  cursor: pointer;
  color: ${({ isHover }) => (isHover ? "black" : "white")};
  font-size: calc(20px + 3.5vw);
  transition: color 1s ease-in-out;
  margin-top: 10px;
  &:hover {
    color: ${(props) => props.hoverColor};
  }
`;

const RightContainer = styled.div`
  position: relative;
  width: 42.5vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const HomeImg = styled.img<{ isHover: boolean }>`
  opacity: ${({ isHover }) => (isHover ? 0 : 1)};
  transition: opacity 1s ease-in-out;
`;
