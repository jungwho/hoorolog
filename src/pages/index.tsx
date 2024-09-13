import Head from "next/head";
import HomePage from "./home";

const Main = () => {
  return (
    <>
      <Head>
        <title>HOOROLOG</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/logo.png" />
      </Head>
      <HomePage />
    </>
  );
};

export default Main;
