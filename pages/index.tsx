import type { NextPage } from "next";
import Head from "next/head";
import Header from "../components/Header";

const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>Airbnb</title>
      </Head>
      <>
        <Header />
      </>
      {/* Banner */}
    </div>
  );
};

export default Home;
