import styled from "@emotion/styled";
import { useStore } from "../../../commons/stores/store";
import { useRouter } from "next/router";

const SignContainer = () => {
  const { accessToken } = useStore();
  const router = useRouter();
  const onClickSignIn = () => {
    router.push("/sign/signIn");
  };
  const onClickSignUp = () => {
    router.push("/sign/signUp");
  };
  if (accessToken)
    return (
      <Container>
        <SignText>SIGN OUT</SignText>
      </Container>
    );
  return (
    <Container>
      <SignText onClick={onClickSignIn}>SIGN IN</SignText>
      <SignText>/</SignText>
      <SignText onClick={onClickSignUp}>SIGN UP</SignText>
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
  font-family: "gsL";
  font-size: calc(12px + 1vw);
  margin-left: 15px;
  &:hover {
    color: gray;
    cursor: pointer;
  }
`;
