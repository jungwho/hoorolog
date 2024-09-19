import styled from "@emotion/styled";
import { roadData } from "./roadData";

interface RoadBoardProps {
  index: number;
}

const RoadBoard = ({ index }: RoadBoardProps) => {
  const data = roadData[index];

  return (
    <Container>
      {data.image.endsWith(".png") ? (
        <Image src={data.image} alt={data.name} draggable="false" />
      ) : (
        <Video autoPlay muted loop draggable="false">
          <source src={data.image} type="video/mp4" />
        </Video>
      )}
      <div style={{ marginTop: "20px" }}>
        <Name>{data.name}</Name>
      </div>
      <Description>{data.description}</Description>
      <Date>{data.date}</Date>
    </Container>
  );
};

export default RoadBoard;

const Container = styled.div`
  flex: 0 0 26%;
  width: 400px;
  margin-top: 100px;
  height: 500px;
  margin: 0 3.5%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  &:hover > img,
  &:hover > video {
    opacity: 0.25;
    cursor: pointer;
  }
  &:hover > div > span {
    color: black;
    background-color: white;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 75%;
  object-fit: cover;
  border-radius: 3%;
`;

const Video = styled.video`
  width: 100%;
  height: 75%;
  object-fit: cover;
  border-radius: 3%;
`;

const Name = styled.span`
  font-size: calc(8px + 0.5vw);
  color: white;
  border: 1px solid white;
  padding: 5px 25px 3px;
`;

const Description = styled.div`
  color: white;
  margin-top: 15px;
  font-family: gsL;
  font-size: calc(10px + 0.5vw);
`;

const Date = styled.div`
  color: gray;
  margin-top: 5px;
  font-family: gsL;
  font-size: calc(8px + 0.5vw);
`;
