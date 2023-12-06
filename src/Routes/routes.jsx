import { createBrowserRouter } from "react-router-dom";
import Main from "../Main/Main";
import Home from "../Pages/Home/Home";
import DetailsOne from "../Pages/DetailsOne/DetailsOne";
import DetailsTwo from "../Pages/DetailsTwo/DetailsTwo";
import DetailsThree from "../Pages/DetailsThree/DetailsThree";
import DetailsFour from "../Pages/DetailsFour/DetailsFour";
import DetailsFive from "../Pages/DetailsFive/DetailsFive";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage/>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/driver-app",
        element: <DetailsOne />,
      },
      {
        path: "/automated-equipment-dispatching",
        element: <DetailsTwo />,
      },
      {
        path: "/fuel-stops",
        element: <DetailsThree />,
      },

      {
        path: "/details-4",
        element: <DetailsFour />,
      }, {
        path: "/details-5",
        element: <DetailsFive />,
      },
    ],
  },
]);

export default routes;
