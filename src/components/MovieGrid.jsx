import { Link } from "react-router-dom";

const MovieGrid = ({ movies }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 p-4 lg:grid-cols-4 bg-white/10 backdrop-blur-xs border border-white/20 gap-4 rounded-xl">
      {movies?.Search?.map((movie) => (
        <div key={movie.imdbID} className="border p-4 rounded-lg">
          <Link to={`/movie/${movie.imdbID}`}>
            <img
              src={movie.Poster}
              alt={movie.Title}
              className="w-full h-64 object-contain mb-2"
            />
            <h3 className="font-semibold">{movie.Title}</h3>
            <p>{movie.Year}</p>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default MovieGrid;
