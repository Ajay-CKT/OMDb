import axios from "axios";

const API_KEY = "2485c574"; /* enter you api key here */
const BASE_URL = "https://www.omdbapi.com/";

export const searchMovies = async (query, page = 1, type = "") => {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        s: query,
        page,
        type,
        apikey: API_KEY,
      },
    });

    if (response.data.Response === "False") {
      return { error: response.data.Error };
    }

    return response.data;
  } catch (error) {
    console.error("Error fetching movies:", error);
    return { error: "An unexpected error occurred. Please try again later." };
  }
};

export const getMovieDetails = async (id) => {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        i: id,
        apikey: API_KEY,
      },
    });

    if (response.data.Response === "False") {
      return { error: response.data.Error };
    }

    return response.data;
  } catch (error) {
    console.error("Error fetching movie details:", error);
    return { error: "An unexpected error occurred. Please try again later." };
  }
};
