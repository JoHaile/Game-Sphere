import { createBrowserRouter } from "react-router";
import Layout from "./pages/Layout";
import HomePage from "./pages/HomePage";
import GameDetailsPage from "./pages/GameDetailsPage";
import ErrorPages from "./pages/ErrorPages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPages />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "games/:slug", element: <GameDetailsPage /> },
    ],
  },
]);

export default router;
