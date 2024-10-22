import styled from "@emotion/styled";
import { ISignUIProps } from "../../commons/types/types";
import NavContainer from "../../nav";
import { useForm } from "react-hook-form";

export const SignUI = (props: ISignUIProps) => {
  const { register, handleSubmit } = useForm();

  const isSignUp = props.isSignUp;
  return (
    <>
      <NavContainer />
      <Container>
        <SignTitle>{props.text}</SignTitle>
        <SignForm onSubmit={handleSubmit(props.onSubmit)}>
          {isSignUp && (
            <div>
              <SignText>Nickname</SignText>
              <SignInput {...register("name")} />
            </div>
          )}
          <div>
            <SignText>Email</SignText>
            <SignInput {...register("email")} />
          </div>
          <div>
            <SignText>Password</SignText>
            <SignInput {...register("password")} />
          </div>
          {isSignUp && (
            <div>
              <SignText>Password-Check</SignText>
              <SignInput />
            </div>
          )}
          {props.error && <ErrorText>{props.error}</ErrorText>}
          <SignButton type="submit">Register</SignButton>
        </SignForm>
      </Container>
    </>
  );
};

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const SignTitle = styled.div`
  font-family: gsL;
  font-size: calc(16px + 1vw);
  margin-bottom: 25px;
`;

export const SignForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SignText = styled.div`
  font-family: gsL;
  font-size: calc(12px + 0.25vw);
`;
export const SignInput = styled.input`
  font-family: gsL;
  border: 1px solid white;
  background-color: black;
  color: white;
  width: 400px;
  margin: 5px 0 20px;
  padding: 10px;
`;
export const ErrorText = styled.div`
  font-family: gsL;
  color: #ff3232;
  font-size: 14px;
`;

export const SignButton = styled.button`
  font-size: calc(10px + 0.5vw);
  font-family: gsM;
  padding: 7.5px 30px;
  color: white;
  background-color: black;
  border: 1px solid white;
  margin-top: 25px;
  &:hover {
    cursor: pointer;
    color: black;
    background-color: white;
  }
`;
