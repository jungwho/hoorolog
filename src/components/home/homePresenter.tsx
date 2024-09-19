import styled from "@emotion/styled";
import { useStore } from "../store";
import { colors } from "../../styles/color";
import { CircleSVG } from "../../styles/components/svg";
import { HomeUIProps } from "../types";
import SignContainer from "./components/signContainer";
import ImgContainer from "./components/imgContainer";
import CommentContainer from "./components/commentContainer";
import DescriptionContainer from "./components/descriptionContainer";

const HomeUI = (props: HomeUIProps) => {
  const { navList, isHover } = useStore();
  return (
    <Container isHover={isHover}>
      <LeftContainer>
        <SignContainer />
        {navList.map((nav, index) => (
          <>
            <NavItem
              key={index}
              hoverColor={colors[nav.name]}
              onClick={() => props.onClickNav(nav.name)}
              onMouseEnter={() => props.handleMouseEnter(index)}
              onMouseLeave={props.handleMouseLeave}
              isHover={isHover}
            >
              {nav.text}
            </NavItem>
            {index < 2 && (
              <CircleSVG
                size={14}
                color={isHover ? "black" : "white"}
                style={{
                  transition: "fill 1s ease-in-out",
                }}
              />
            )}
          </>
        ))}
        <CommentContainer />
      </LeftContainer>
      <RightContainer>
        <img width={175} src="/images/home/hoorolog.png" />
        <ImgContainer />
        <DescriptionContainer />
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
