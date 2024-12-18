import { createContext, useReducer, useContext } from "react";
import { searchMovies } from "../services/api";

const initialState = {
  query: "",
  page: 1,
  selectedType: "",
  movies: null,
  error: null,
  isLoading: false,
};

const searchReducer = (state, action) => {
  switch (action.type) {
    case "SET_QUERY":
      return { ...state, query: action.payload, page: 1 };
    case "SET_PAGE":
      return { ...state, page: action.payload };
    case "SET_TYPE":
      return { ...state, selectedType: action.payload, page: 1 };
    case "FETCH_START":
      return { ...state, isLoading: true, error: null };
    case "FETCH_SUCCESS":
      return {
        ...state,
        isLoading: false,
        movies: action.payload,
        error: null,
      };
    case "FETCH_FAILURE":
      return { ...state, isLoading: false, error: action.payload };
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};

// Create Context
const SearchContext = createContext();

// Provider Component
export const SearchProvider = ({ children }) => {
  const [state, dispatch] = useReducer(searchReducer, initialState);

  // Fetch Movies
  const fetchMovies = async () => {
    dispatch({ type: "FETCH_START" });
    try {
      const data = await searchMovies(
        state.query,
        state.page,
        state.selectedType
      );
      dispatch({ type: "FETCH_SUCCESS", payload: data });
    } catch (error) {
      dispatch({ type: "FETCH_FAILURE", payload: error.message });
    }
  };

  return (
    <SearchContext.Provider value={{ state, dispatch, fetchMovies }}>
      {children}
    </SearchContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useSearch = () => useContext(SearchContext);
