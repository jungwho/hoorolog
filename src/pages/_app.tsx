import ApolloSetting from "../commons/apollo/ApolloSetting";
import "../styles/global.css";

export default function App({ Component, pageProps }) {
  return (
    // <ApolloSetting>
    <Component {...pageProps} />
    // </ApolloSetting>
  );
}
