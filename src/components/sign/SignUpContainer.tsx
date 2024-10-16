import { useState } from "react";
import { gql, useMutation } from "@apollo/client";

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
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [createUser, { data, loading, error }] =
    useMutation(CREATE_USER_MUTATION);

  const onClickSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await createUser({
        variables: { email, password, name },
      });
      console.log("User created:", response.data.createUser);
    } catch (e) {
      console.error(e);
    }
  };
  return (
    <form onSubmit={onClickSignUp}>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <button type="submit" disabled={loading}>
        {loading ? "Creating..." : "Create User"}
      </button>
      {error && <p>Error: {error.message}</p>}
      {data && <p>User {data.createUser.name} created successfully!</p>}
    </form>
  );
};
