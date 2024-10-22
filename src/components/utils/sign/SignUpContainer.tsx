import { gql, useMutation } from "@apollo/client";
import { SignUI } from "./SignPresenter";
import { useState } from "react";
import { useRouter } from "next/router";
import { IMutation } from "../../commons/types/generated/types";

const CREATE_USER_MUTATION = gql`
  mutation CreateUser($email: String!, $password: String!, $name: String!) {
    createUser(
      createUserInput: { email: $email, password: $password, name: $name }
    ) {
      _id
      email
      name
    }
  }
`;

export const SignUpContainer = () => {
  const [error, setError] = useState("");
  const router = useRouter();

  const [createUserFnc] =
    useMutation<Pick<IMutation, "createUser">>(CREATE_USER_MUTATION);

  const onSubmitSignUp = async (data: any) => {
    try {
      await createUserFnc({
        variables: {
          name: data.name,
          email: data.email,
          password: data.password,
        },
      });
      router.push("/sign/signIn");
    } catch (error) {
      setError(error?.message);
    }
  };

  return (
    <SignUI
      text="Sign Up"
      onSubmit={onSubmitSignUp}
      error={error}
      isSignUp={true}
    />
  );
};
