import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

const globalState = new InMemoryCache();

interface IApolloSettingProps {
  children: JSX.Element;
}

export default function ApolloSetting(props: IApolloSettingProps) {
  const client = new ApolloClient({
    uri: "http://backend-example.codebootcamp.co.kr/graphql",
    cache: globalState,
  });
  return <ApolloProvider client={client}>{props.children}</ApolloProvider>;
}
