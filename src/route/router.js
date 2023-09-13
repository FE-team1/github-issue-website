import { createBrowserRouter } from "react-router-dom";
import Issue from "../pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Issue />,
  },
]);

export default router;
