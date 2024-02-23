import React from "react";
import ReactDOM from "react-dom/client";
import Navbar from "./Components/Navbar";
import AboutMe from "./Components/AboutMe";
import People from "./Components/People";
import Alumni from "./Components/Alumni";
import Body from "./Components/Body";
import Research from "./Components/Research";
import Projects from "./Components/Projects";
import Error from "./Components/Error";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

const App = () => {
  return (
    <div className="flex flex-row bg-slate-600 max-w-screen max-h-screen overflow-hidden">
      <Navbar />
      <Outlet />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/aboutme",
        element: <AboutMe />,
      },
      {
        path: "/people",
        element: <People />,
      },
      {
        path: "/alumni",
        element: <Alumni />,
      },
      {
        path: "/research",
        element: <Research />,
      },
      {
        path: "/projects",
        element: <Projects />,
      },
    ],
    errorElement: <Error />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={appRouter} />
  </React.StrictMode>
);
