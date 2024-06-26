import { createBrowserRouter } from "react-router-dom";
import GameDetail from "../pages/GameDetail";
import Layout from "../pages/Layout";
import HomePage from "../pages/HomePage";
import ErrorPage from "../pages/ErrorPage";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },

      {
        path: "games/:id",
        element: <GameDetail />,
      },
    ],
  },
]);
export default router;
