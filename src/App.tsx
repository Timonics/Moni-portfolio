import { createBrowserRouter, RouterProvider } from "react-router";

import IntroPage from "./src/components/intro";
import AboutPage from "./src/pages/about";
import ToolsPage from "./src/pages/tools";
import ContactPage from "./src/pages/contact";
import ErrorPage from "./src/pages/error";
import ProjectPage from "./src/pages/project";

const router = createBrowserRouter([
  {
    path: "/",
    element: <IntroPage />,
  },
  {
    path: "/my-projects",
    element: <ProjectPage />
  },
  {
    path: "/about",
    element: <AboutPage />,
  },
  {
    path: "/tools-and-skills",
    element: <ToolsPage />,
  },
  {
    path: "/contact-me",
    element: <ContactPage />,
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
