import { createBrowserRouter, Link, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import MovieDetails from "./components/MovieDetails";

const App = () => {
  const router = createBrowserRouter(
    [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/movie/:id",
        element: <MovieDetails />,
      },
      {
        path: "*",
        element: (
          <div className="bg-black h-screen flex flex-col items-center justify-center gap-6 text-white">
            <p className="text-red-500 bg-red-100 p-2 rounded-md border border-red-300 w-1/2 text-center">
              No results found. Please try a different search query.
            </p>
            <button className="text-[#e2b616]">
              <Link to="/">Go Back to Home</Link>
            </button>
          </div>
        ),
      },
    ],
    {
      future: {
        v7_fetcherPersist: true,
        v7_normalizeFormMethod: true,
        v7_partialHydration: true,
        v7_relativeSplatPath: true,
        v7_skipActionErrorRevalidation: true,
      },
    }
  );
  return (
    <>
      <RouterProvider router={router} future={{ v7_startTransition: true }} />
    </>
  );
};

export default App;
