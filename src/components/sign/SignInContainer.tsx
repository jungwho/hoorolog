import { useMutation, gql } from "@apollo/client";
import { useState } from "react";
import {
  IMutation,
  IMutationLoginUserArgs,
} from "../../../src/commons/types/generated/types";
import { useRouter } from "next/router";

const LoginUser = gql`
  mutation loginUser($email: String!, $password: String!) {
    loginUser(email: $email, password: $password) {
      accessToken
    }
  }
`;

export function SignInContainer() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginUserFnc] = useMutation<
    Pick<IMutation, "loginUser">,
    IMutationLoginUserArgs
  >(LoginUser);

  const onChangeEmail = (event) => {
    setEmail(event.currentTarget.value);
  };
  const onChangePassword = (event) => {
    setPassword(event.currentTarget.value);
  };
  const onClickLogin = async () => {
    //1. 로그인 뮤테이션 보내서 accessToken 받아오기
    const result = await loginUserFnc({
      variables: { email, password },
    });
    const accessToken = result.data?.loginUser.accessToken;
    console.log(accessToken);

    //2. 받아온 accessToken을 globalState에 저장하기
    if (accessToken === undefined) {
      alert("로그인에 실패했습니다.");
      return;
    }
  };

  return (
    <>
      이메일: <input type="text" onChange={onChangeEmail} />
      비밀번호: <input type="password" onChange={onChangePassword} />
      <button onClick={onClickLogin}>LOGIN</button>
    </>
  );
}
