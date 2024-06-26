import { createBrowserRouter } from "react-router-dom";
import GameDetail from "../pages/GameDetail";
import Layout from "../pages/Layout";
import HomePage from "../pages/HomePage";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
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
