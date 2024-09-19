import styled from "@emotion/styled";
import NavContainer from "../../components/nav";
import Road from "../../components/road/roadContainer";

const RoadPage = () => {
  return (
    <Container>
      <NavContainer />
      <Road />
    </Container>
  );
};

export default RoadPage;

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: black;
`;
