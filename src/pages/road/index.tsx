import styled from "@emotion/styled";
import NavContainer from "../../components/nav";

const RoadPage = () => {
  return (
    <Container>
      <NavContainer />
    </Container>
  );
};

export default RoadPage;

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: black;
`;
