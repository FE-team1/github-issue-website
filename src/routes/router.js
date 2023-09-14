import { createBrowserRouter } from "react-router-dom";
import Issue from "../pages";
import Detail from "../pages/detailIndex";
import NavBar from "../components/navbar";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Issue />,
  },
  {
    path: "/",
    element: <Detail />,
  },
  {
    path: "/",
    element: <NavBar />,
  },
]);

export default router;