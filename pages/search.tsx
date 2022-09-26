import { useRouter } from "next/router";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { format } from "date-fns";
import { dataSearchPage } from "../data";
import InfoCard from "../components/InfoCard";

function Search() {
  const router = useRouter();
  const { location, startDate, endDate, numberOfGuests } = router.query;

  if (!startDate || !endDate || !location || !numberOfGuests) return;

  const formattedStartDate = format(
    new Date(startDate as string),
    "dd MMMM yy"
  );
  const formattedEndDate = format(new Date(endDate as string), "dd MMMM yy");
  const range = `${formattedStartDate} - ${formattedEndDate}`;

  return (
    <div>
      <Header
        placeholder={`${location} | ${range} | ${numberOfGuests} guests`}
      />

      <main className="flex">
        <section className="flex-grow pt-14 px-6">
          <p className="text-xs">
            300+ Stays - {range} for {numberOfGuests} guests
          </p>

          <h1 className="text-3xl font-semibold mt-2 mb-6">
            Stays in {location}
          </h1>

          <div className="hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap">
            <p className="button">Cancellation flexibility</p>
            <p className="button">Type of place</p>
            <p className="button">Price</p>
            <p className="button">Rooms and beds</p>
            <p className="button">More filter</p>
          </div>

          <div className="flex flex-col">
            {dataSearchPage.map(
              (
                { img, location, title, description, star, price, total },
                i
              ) => (
                <InfoCard
                  key={i}
                  img={img}
                  location={location}
                  description={description}
                  star={star}
                  price={price}
                  total={total}
                  title={title}
                />
              )
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default Search;
