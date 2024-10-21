import styled from "@emotion/styled";
import { useStore } from "../../../commons/stores/store";
import { useRouter } from "next/router";
import { gql, useQuery } from "@apollo/client";
import { IQuery } from "../../../commons/types/generated/types";
import { useEffect } from "react";

const FETCH_USER = gql`
  query {
    fetchUserLoggedIn {
      email
      name
    }
  }
`;

const SignContainer = () => {
  const { setAccessToken, accessToken } = useStore();
  const router = useRouter();

  const onClickSignIn = () => {
    router.push("/sign/signIn");
  };
  const onClickSignUp = () => {
    router.push("/sign/signUp");
  };
  const onClickSignOut = () => {
    setAccessToken("");
    localStorage.setItem("accessToken", "");
  };
  const { data } = useQuery<Pick<IQuery, "fetchUserLoggedIn">>(FETCH_USER);

  if (accessToken)
    return (
      <Container>
        <Name>{data?.fetchUserLoggedIn.name}</Name>
        <SignText onClick={onClickSignOut}>SIGN OUT</SignText>
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
  font-size: calc(8px + 1vw);
  margin-left: 15px;
  &:hover {
    color: gray;
    cursor: pointer;
  }
`;

const Name = styled.div`
  font-family: "gsL";
  font-size: calc(8px + 1vw);
`;
