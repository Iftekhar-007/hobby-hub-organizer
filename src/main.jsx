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
import CreateGroup from "./Pages/CreateGroup.jsx";
import AuthProvider from "./Context/AuthProvider.jsx";
import PrivateRoutes from "./PrivateRoutes/PrivateRoutes.jsx";
import GroupDetails from "./Pages/GroupDetails.jsx";

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
        path: "/allgroups/:id",
        loader: ({ params }) =>
          fetch(
            `https://hobby-hub-server-lilac.vercel.app/groups/${params.id}`
          ),
        element: (
          <PrivateRoutes>
            <GroupDetails></GroupDetails>
          </PrivateRoutes>
        ),
      },
      {
        path: "/mygroups/:email",

        loader: async ({ params }) => {
          const res = await fetch(
            `https://hobby-hub-server-lilac.vercel.app/groups-by-email?email=${params.email}`
          );
          return res.json();
        },
        // Component: MyGroups,
        element: (
          <PrivateRoutes>
            <MyGroups></MyGroups>
          </PrivateRoutes>
        ),
      },
      {
        path: "/updategroup/:id",

        loader: ({ params }) =>
          fetch(
            `https://hobby-hub-server-lilac.vercel.app/groups/${params.id}`
          ),
        // Component: UpdateGroup,
        element: (
          <PrivateRoutes>
            <UpdateGroup></UpdateGroup>
          </PrivateRoutes>
        ),
      },
      {
        path: "/creategroup",
        // Component: CreateGroup,
        element: (
          <PrivateRoutes>
            <CreateGroup></CreateGroup>
          </PrivateRoutes>
        ),
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
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
);
