import type { NextPage } from "next";
import Head from "next/head";
import Banner from "../components/Banner";
import Header from "../components/Header";
import MediumCard from "../components/MediumCard";
import SmallCard from "../components/SmallCard";
import { dataBanner, secondDataBanner } from "../data";

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

          <div className="grid  grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {dataBanner.map(({ img, distance, location }, i) => (
              <SmallCard
                key={i}
                img={img}
                distance={distance}
                location={location}
              />
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-4xl font-semibold py-8">Live Anywhere</h2>
          <div className="grid  grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {secondDataBanner.map(({ img, title }, i) => (
              <MediumCard key={i} img={img} title={title} />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
