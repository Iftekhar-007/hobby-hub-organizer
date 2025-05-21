import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

import { createBrowserRouter, RouterProvider } from "react-router";
import NotFound from "./Error/NotFound.jsx";
import MainLayout from "./LayOut/MainLayout.jsx";
import Home from "./Pages/Home.jsx";
import AllGroups from "./Pages/AllGroups.jsx";
import MyGroups from "./Pages/MyGroups.jsx";
import UpdateGroup from "./Pages/UpdateGroup.jsx";
import SignUp from "./Components/SignUp.jsx";
import LogIn from "./Components/LogIn.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/allgroups",
        Component: AllGroups,
      },
      {
        path: "/mygroups",
        Component: MyGroups,
      },
      {
        path: "/updategroup",
        Component: UpdateGroup,
      },
    ],
  },
  {
    path: "/signup",
    Component: SignUp,
  },
  {
    path: "/login",
    Component: LogIn,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
