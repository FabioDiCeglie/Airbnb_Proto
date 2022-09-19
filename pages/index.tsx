import type { NextPage } from "next";
import Head from "next/head";
import Banner from "../components/Banner";
import Header from "../components/Header";
import SmallCard from "../components/SmallCard";
import { dataBanner } from "../data";

const Home: NextPage = () => {
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

          {dataBanner.map(({ img, distance, location }, i) => (
            <SmallCard
              key={i}
              img={img}
              distance={distance}
              location={location}
            />
          ))}
        </section>
      </main>
    </div>
  );
};

export default Home;
