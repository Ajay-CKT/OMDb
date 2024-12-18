import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getMovieDetails } from "../services/api";

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const data = await getMovieDetails(id);
        setMovie(data);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchMovieDetails();
  }, [id]);

  if (error) return <p className="text-red-500 p-4">{error}</p>;
  if (!movie) return <p className="p-4">Loading...</p>;

  return (
    <div className="relative bg-black overflow-y-scroll no-scrollbar">
      <nav className="bg-[#121212] p-4 flex justify-between absolute top-0 w-full ">
        <Link to="/">
          <img
            src="/OMDb.png"
            alt="omdb-logo"
            className="h-10 w-12 rounded-md"
          />
        </Link>
        <Link to="/">
          <div>
            <button className="w-14 h-10 rounded-md text-[#e2b616] font-semibold text-sm">
              Go back
            </button>
          </div>
        </Link>
      </nav>
      <div className="max-w-2xl mx-auto pt-20 px-4 pb-2  text-white h-screen ">
        <img
          src={movie.Poster}
          alt={movie.Title}
          className=" p-2 object-contain"
        />
        <h2 className="text-2xl font-bold mt-4">
          {movie.Title} ({movie.Year})
        </h2>
        <p>
          <strong>Genre:</strong> {movie.Genre}
        </p>
        <p>
          <strong>Plot:</strong> {movie.Plot}
        </p>
        <p>
          <strong>Rating:</strong> {movie.imdbRating}
        </p>
        <p>
          <strong>Cast:</strong> {movie.Actors}
        </p>
      </div>
    </div>
  );
};

export default MovieDetails;
