import "./index.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router";
import { Home, AboutUs, ContactUs, User, GitHub } from "./components";
import githubInfoLoader from "./components/GitHub/githubInfoLoader.js";
import Layout from "./Layout";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Layout />,
//     children: [
//       { path: "", element: <Home /> },
//       { path: "about", element: <AboutUs /> },
//       { path: "contact", element: <ContactUs /> },
//     ],
//   },
// ]);

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="about" element={<AboutUs />} />
      <Route path="contact" element={<ContactUs />} />
      <Route loader={githubInfoLoader} path="github" element={<GitHub />} />
      <Route path="user/:userId" element={<User />} />
    </Route>,
  ),
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />;
  </StrictMode>,
);
