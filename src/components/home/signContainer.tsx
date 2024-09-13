import styled from "@emotion/styled";
import { useState } from "react";

const SignContainer = () => {
  const [isSigned, setIsSigned] = useState<boolean>(false);
  if (isSigned)
    return (
      <Container>
        <SignText>SIGN OUT</SignText>
      </Container>
    );
  return (
    <Container>
      <SignText>SIGN IN</SignText>
      <SignText>/</SignText>
      <SignText>SIGN UP</SignText>
    </Container>
  );
};
export default SignContainer;

const Container = styled.div`
  position: absolute;
  bottom: 57vh;
  right: 9vw;
  display: flex;
`;

const SignText = styled.div`
  color: white;
  font-family: "gsL";
  font-size: calc(12px + 1vw);
  margin-left: 15px;
`;
