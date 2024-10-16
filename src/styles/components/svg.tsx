/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";

interface CircleProps {
  color: string;
  size: number;
}

const Svg = styled.svg<{ size: number }>`
  width: calc(${({ size }) => size}px + 0.25vw);
  height: calc(${({ size }) => size}px + 0.25vw);
`;

export const CircleSVG: React.FC<CircleProps> = ({ color, size }) => {
  return (
    <Svg size={size} viewBox="0 0 100 100">
      <circle cx="50" cy="50" r="40" fill={color} />
    </Svg>
  );
};
