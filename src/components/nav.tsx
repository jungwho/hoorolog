import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";
import { useRouter } from "next/router";

const NavContainer = () => {
  const router = useRouter();
  return (
    <Container>
      <Logo onClick={() => router.push("/home")}>
        {Array.from("HOOROLOG").map((letter, index) => (
          <Letter key={index} style={{ animationDelay: `${index * 0.1}s` }}>
            {letter}
          </Letter>
        ))}
      </Logo>
      <div></div>
    </Container>
  );
};

export default NavContainer;

const letterAnimation = keyframes`
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  10%{
    opacity: 1;
    transform: translateY(0px);
  }
  90%{

    transform: translateY(0px);
  }
  100% {
    opacity: 1;
    transform: translateY(-50px);
  }
`;

const navAnimation = keyframes`
  0%{
    opacity: 0;
  }
  50%{
    opacity: 0;
  }

`;

const Container = styled.div`
  width: 100vw;
  position: absolute;
  top: 0;
  padding: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  animation: ${navAnimation} 3s;
`;

const Logo = styled.div`
  font-size: calc(0.7vw + 10px);
  display: flex;
  &:hover {
    cursor: pointer;
    opacity: 0.5;
    transition: 0.5 ease-in-out;
  }
`;

const Letter = styled.div`
  animation: ${letterAnimation} 5s ease-in-out infinite;
`;
