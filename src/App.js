import logo from "./logo.svg";
import "./App.css";
import Issue from "./pages";
import { RouterProvider } from "react-router-dom";
import router from "./route/router";
import { useEffect } from "react";

function App() {
  return <RouterProvider router={router} />;
}

export default App;
