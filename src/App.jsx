import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  HomeLayout,
  About,
  Landing,
  Error,
  Newsletter,
  SinglePageError,
  Car,
} from "./pages";
import { loader as landingLoader } from "./pages/Landing";
import { loader as SingleCarLoader } from "./pages/Car";

const router = createBrowserRouter([
  {
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />,
        errorElement: <SinglePageError />,
        loader: landingLoader,
      },
      { path: "about", element: <About /> },
      {
        path: "car/:brand",
        element: <Car />,
        loader: SingleCarLoader,
      },
      { path: "newsletter", element: <Newsletter /> },
      // {
      //   path: "*",
      //   element: <Error />,
      // },
    ],
  },
]);
const App = () => {
  return <RouterProvider router={router} />;
};
export default App;
