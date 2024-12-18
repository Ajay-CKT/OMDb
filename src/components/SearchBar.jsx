import { useNavigate } from "react-router-dom";

const SearchBar = ({ setQuery, setPage }) => {
  const navigate = useNavigate();

  const handleSearch = (event) => {
    event.preventDefault();
    const query = event.target.elements.query.value.trim();
    if (query) {
      setQuery(query);
      setPage(1);
      navigate("/");
    }
  };

  return (
    <form
      onSubmit={handleSearch}
      className="mb-4 text-black flex justify-between md:w-3/4"
    >
      <input
        type="text"
        name="query"
        placeholder="Search for movies..."
        className="p-2 w-full outline-none"
      />

      <button
        type="submit"
        className="bg-[#e2b616] p-2 rounded-r-md text-black font-semibold"
      >
        Search
      </button>
    </form>
  );
};

export default SearchBar;
