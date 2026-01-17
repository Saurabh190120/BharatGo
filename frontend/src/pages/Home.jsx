import SearchBar from "../components/traveller/SearchBar";

export default function Home() {
  return (
    <section className="text-center py-20">
      <h1 className="text-4xl font-bold mb-3">
        Discover Your Next Adventure
      </h1>
      <p className="text-gray-600 mb-8">
        Flights, hotels, buses and packages
      </p>
      <div className="flex justify-center">
        <SearchBar />
      </div>
    </section>
  );
}
