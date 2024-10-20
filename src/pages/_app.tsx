import { JsxElement } from "typescript";
import ApolloSetting from "../commons/apollo/ApolloSetting";
import "../styles/global.css";

export default function App({ Component, pageProps }): JSX.Element {
  return (
    <ApolloSetting>
      <Component {...pageProps} />
    </ApolloSetting>
  );
}
