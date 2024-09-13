/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";

interface CircleProps {
  color: string;
  size: number;
  style: any;
}

const Svg = styled.svg<{ size: number }>`
  width: calc(${({ size }) => size}px + 0.5vw);
  height: calc(${({ size }) => size}px + 0.5vw);
`;

export const CircleSVG: React.FC<CircleProps> = ({ color, size, style }) => {
  return (
    <Svg size={size} viewBox="0 0 100 100">
      <circle cx="50" cy="50" r="40" fill={color} style={style} />
    </Svg>
  );
};
