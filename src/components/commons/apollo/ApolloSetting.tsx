import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  ApolloLink,
} from "@apollo/client";
import { createUploadLink } from "apollo-upload-client";
import { useStore } from "../stores/store";
import { useEffect } from "react";
const globalState = new InMemoryCache();

interface IApolloSettingProps {
  children: JSX.Element;
}

export default function ApolloSetting(props: IApolloSettingProps) {
  const { accessToken, setAccessToken } = useStore();

  useEffect(() => {
    const localAccessToken = localStorage.getItem("accessToken");
    setAccessToken(localAccessToken ?? "");
  }, []);
  const uploadLink = createUploadLink({
    uri: "http://backend-practice.codebootcamp.co.kr/graphql",
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  const client = new ApolloClient({
    link: ApolloLink.from([uploadLink]),
    cache: globalState,
  });

  return <ApolloProvider client={client}>{props.children}</ApolloProvider>;
}
