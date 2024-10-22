import { useMutation, gql } from "@apollo/client";
import { useState, useEffect } from "react";
import { IMutation } from "../../commons/types/generated/types";
import { useStore } from "../../commons/stores/store";
import { useRouter } from "next/router";
import { SignUI } from "./SignPresenter";

const LoginUser = gql`
  mutation loginUser($email: String!, $password: String!) {
    loginUser(email: $email, password: $password) {
      accessToken
    }
  }
`;

export function SignInContainer() {
  const [error, setError] = useState("");
  const router = useRouter();
  const [loginUserFnc] = useMutation<Pick<IMutation, "loginUser">>(LoginUser);

  const onSubmitSignIn = async (data: any) => {
    try {
      const result = await loginUserFnc({
        variables: {
          email: data.email,
          password: data.password,
        },
      });
      localStorage.setItem("accessToken", result.data?.loginUser.accessToken);

      router.push("/");
    } catch (error) {
      setError(error?.message);
    }
  };

  return (
    <SignUI
      text="Sign In"
      onSubmit={onSubmitSignIn}
      error={error}
      isSignUp={false}
    />
  );
}
