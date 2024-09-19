import styled from "@emotion/styled";
import RoadBoard from "./components/roadBoard";

const RoadUI = () => {
  return (
    <Container>
      {Array.from({ length: 8 }, (_, i) => (
        <RoadBoard key={i} index={i} />
      ))}
    </Container>
  );
};

export default RoadUI;

const Container = styled.div`
  color: white;
  width: 100vw;
  display: flex;
  padding: 10vw;
  justify-content: space-around;
  align-items: center;
`;
