import { createBrowserRouter } from "react-router-dom";
import Issue from "../pages";
import DetailIssue from "../pages/components/detail-Issue";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Issue />,
  },
  {
    path: "/detail",
    element: <DetailIssue />,
  },
]);

export default router;
