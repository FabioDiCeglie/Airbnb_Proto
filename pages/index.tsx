import axios from "axios";
import type { NextPage } from "next";
import Head from "next/head";
import Banner from "../components/Banner";
import Header from "../components/Header";

const Home: NextPage = ({ exploreData }) => {
  return (
    <div className="">
      <Head>
        <title>Airbnb</title>
      </Head>

      <Header />
      <Banner />

      <main className="max-w-7xl mx-auto px-8 sm:px-16">
        <section className="pt-6">
          <h2 className="text-3xl font-semibold pb-5">Explore Nearby</h2>

          {exploreData.map((item) => (
            <h1>{item.location}</h1>
          ))}
        </section>
      </main>
    </div>
  );
};

export default Home;

export const getStaticProps = async () => {
  const exploreData = await axios.get(
    "https://api.jsonbin.io/v3/b/6326f9e6e13e6063dcac2aff",
    {
      headers: {
        "X-Master-Key":
          "$2b$10$JMMR6Itz4f4g5Si72gofaex6pPIIGczNgWAOGG/V/s8WIOfCqTV9W",
        "X-Access-Key":
          "$2b$10$B6RKGScLldvlHJaVmfNe6u7MlwyoC4T32Q99udLwC.CUC1gVtEYAi",
      },
    }
  );
  console.log(exploreData.data.record);

  // return {
  //   props: {
  //     exploreData,
  //   },
  // };
};
