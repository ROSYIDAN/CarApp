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
import { action as newsLatterAction } from "./pages/Newsletter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5,
    },
  },
});

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
      {
        path: "newsletter",
        element: <Newsletter />,
        action: newsLatterAction,
        errorElement: <SinglePageError />,
      },
    ],
  },
]);
const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
};
export default App;
