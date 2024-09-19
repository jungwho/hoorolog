import styled from "@emotion/styled";
import { roadData } from "./roadData";

interface RoadBoardProps {
  index: number;
}

const RoadBoard = ({ index }: RoadBoardProps) => {
  return <div>{roadData[index].name}</div>;
};

export default RoadBoard;

const Container = styled.div`
  width: calc(10vw + 300px);
  height: 700px;
  background-color: aliceblue;
`;
