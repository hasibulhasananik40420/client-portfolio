import { createBrowserRouter } from "react-router-dom";
import Main from "../Main/Main";
import Home from "../Pages/Home/Home";
import DetailsOne from "../Pages/DetailsOne/DetailsOne";
import DetailsTwo from "../Pages/DetailsTwo/DetailsTwo";
import DetailsThree from "../Pages/DetailsThree/DetailsThree";
import DetailsFour from "../Pages/DetailsFour/DetailsFour";
import DetailsFive from "../Pages/DetailsFive/DetailsFive";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    // errorElement: <NotFoundPage/>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/details-1",
        element: <DetailsOne />,
      },
      {
        path: "/details-2",
        element: <DetailsTwo />,
      },
      {
        path: "/details-3",
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
