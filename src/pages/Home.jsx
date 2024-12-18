import React, { useEffect } from "react";
import { useSearch } from "../context/SearchContext";
import SearchBar from "../components/SearchBar";
import FilterDropDown from "../components/FilterDropdown";
import MovieGrid from "../components/MovieGrid";
import { Link } from "react-router-dom";

const Home = () => {
  const { state, dispatch, fetchMovies } = useSearch();
  const { query, page, selectedType, movies, error, isLoading } = state;

  useEffect(() => {
    if (query) fetchMovies();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query, page, selectedType]);

  return (
    <div className="relative flex flex-col no-scrollbar movie">
      <nav className="bg-[#121212] p-4 flex justify-between absolute top-0 w-full">
        <Link to="/">
          <img
            src="/OMDb.png"
            alt="omdb-logo"
            className="h-10 w-12 rounded-md"
          />
        </Link>
      </nav>
      <div className="pt-32 px-4 pb-2 h-screen overflow-y-scroll text-white no-scrollbar ">
        <div className="md:flex md:flex-row-reverse md:justify-center md:items-center md:w-full p-4 w-full ">
          <SearchBar
            query={query}
            setQuery={(newQuery) =>
              dispatch({ type: "SET_QUERY", payload: newQuery })
            }
          />
          <FilterDropDown
            selectedType={selectedType}
            setSelectedType={(type) =>
              dispatch({ type: "SET_TYPE", payload: type })
            }
          />
        </div>

        <>
          {isLoading && <p className="text-center text-xl">Loading...</p>}
          {error && <p className="text-red-500 text-6xl">{error}</p>}
          {movies && <MovieGrid movies={movies} />}

          {movies?.totalResults > 10 && !error && (
            <div className="flex justify-around mt-4">
              <button
                onClick={() =>
                  dispatch({ type: "SET_PAGE", payload: page - 1 })
                }
                disabled={page === 1}
                className="p-2 bg-[#121212] text-white rounded-md"
              >
                Prev
              </button>
              <button
                onClick={() =>
                  dispatch({ type: "SET_PAGE", payload: page + 1 })
                }
                disabled={page * 10 >= movies.totalResults}
                className="p-2 bg-[#121212] text-white rounded-md"
              >
                Next
              </button>
            </div>
          )}
        </>
      </div>
    </div>
  );
};

export default Home;
