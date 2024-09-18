import { useStore } from "../store";
import styled from "@emotion/styled";
import { colors } from "../../styles/color";
const DescriptionContainer = () => {
  const { isHover, navIndex } = useStore();
  if (navIndex === 0)
    return (
      <Container color={colors.hoo} isHover={isHover}>
        <p style={{ marginTop: "80vh" }}>Hello, I’m Song Jung Hoo.</p>
        <p>Learn more about who I am.</p>
      </Container>
    );
  if (navIndex === 1)
    return (
      <Container color={colors.road} isHover={isHover}>
        <p>Explore the Road,</p>
        <p style={{ marginBottom: "80vh" }}>I’ve traveled through life.</p>
      </Container>
    );
  if (navIndex === 2)
    return (
      <Container color={colors.log} isHover={isHover}>
        <p>Contact me via the visitor log.</p>
      </Container>
    );
  return <></>;
};

export default DescriptionContainer;

const Container = styled.div<{ color: string; isHover: boolean }>`
  position: absolute;
  color: ${(props) => props.color};
  opacity: ${({ isHover }) => (isHover ? 1 : 0)};
  transition: opacity 0.5s ease-in-out;
  transition-delay: ${(props) => (props.isHover ? "0.5s" : "0s")};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 1.5vw);
`;
