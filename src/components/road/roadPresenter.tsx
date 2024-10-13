import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";
import { useRef, useState, useCallback } from "react";
import RoadBoard from "./components/roadBoard";

export default function CardList() {
  const containerRef = useRef<HTMLDivElement>(null);

  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [startX, setStartX] = useState<number>(0);
  const [totalX, setTotalX] = useState<number>(0);

  const preventUnexpectedEffects = useCallback((e: MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
  }, []);

  const onDragStart = (e: React.MouseEvent) => {
    setIsDragging(true);
    const x = e.clientX;
    setStartX(x);
    if (containerRef.current) {
      setTotalX(x + containerRef.current.scrollLeft);
    }
  };

  const onDragMove = (e: React.MouseEvent) => {
    if (!isDragging) return;

    const scrollLeft = totalX - e.clientX;

    if (containerRef.current) {
      containerRef.current.scrollLeft = scrollLeft;
    }
  };

  const onDragEnd = (e: React.MouseEvent) => {
    setIsDragging(false);
    const endX = e.clientX;
    const childNodes = Array.from(containerRef.current?.childNodes || []);
    const dragDiff = Math.abs(startX - endX);
    if (dragDiff > 10) {
      childNodes.forEach((child) => {
        child.addEventListener("click", preventUnexpectedEffects);
      });
    } else {
      childNodes.forEach((child) => {
        child.removeEventListener("click", preventUnexpectedEffects);
      });
    }
  };

  return (
    <Container>
      <Drag>
        DRAG || SCROLL<DragSpan>{">>>"}</DragSpan>
      </Drag>
      <ScrollContainer
        ref={containerRef}
        onMouseDown={onDragStart}
        onMouseMove={onDragMove}
        onMouseUp={onDragEnd}
        onMouseLeave={onDragEnd}
      >
        {Array.from({ length: 8 }, (_, i) => (
          <RoadBoard key={i} index={i} />
        ))}
      </ScrollContainer>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  padding: 0 10vw;
  align-items: center;
  justify-content: center;
  background-color: black;
`;

const ScrollContainer = styled.div`
  display: flex;
  overflow: scroll;
  max-width: 100vw;
  padding: 0 5vw;
  /* background-color: aliceblue; */
  &::-webkit-scrollbar {
    display: none;
  }
`;

const Drag = styled.div`
  margin: 40px 0;
  color: gray;
  font-size: calc(0.5vw + 10px);
  font-family: gsL;
`;

const dragAnimation = keyframes`
  0%{
    padding-left: 5px;
  }
  50%{
    padding-left: 12px;
  }

`;

const DragSpan = styled.span`
  padding-left: 5px;
  animation: ${dragAnimation} 2s infinite;
`;
