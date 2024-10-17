import styled from "@emotion/styled";

export const SignUI = () => {
  return (
    <Container>
      <SignTitle></SignTitle>
      <InputForm>
        <SignText>Nickname</SignText>
        <SignInput />
        <SignText>Email</SignText>
        <SignInput />
        <SignText>Password</SignText>
        <SignInput />
        <SignText>Password-Check</SignText>
        <SignInput />
        <SignButton>Submit</SignButton>
      </InputForm>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
`;

const SignTitle = styled.div``;

const InputForm = styled.form``;
const SignText = styled.div``;
const SignInput = styled.input``;
const ErrorText = styled.div``;

const SignButton = styled.button``;
