import Footer from "../components/Footer";
import Header from "../components/Header";

function Search() {
  return (
    <div>
      <Header />

      <main className="flex">
        <section>
          <p className="text-xs">300+ Stays</p>

          <h1 className="text-3xl font-semibold mt-2 mb-6">Stays in ""</h1>

          <div>
            <p className="button">Cancellation flexibility</p>
            <p className="button">Type of place</p>
            <p className="button">Price</p>
            <p className="button">Rooms and beds</p>
            <p className="button">More filter</p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default Search;
