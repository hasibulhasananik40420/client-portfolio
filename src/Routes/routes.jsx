import { createBrowserRouter } from "react-router-dom";
import Main from "../Main/Main";
import Home from "../Pages/Home/Home";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import SuggestedFuelStops from "../Pages/SuggestedFuelStops/SuggestedFuelStops";
import DriverApp from "../Pages/DriverApp/DriverApp";
import AutomatedEquipmentDispatching from "../Pages/AutomatedEquipmentDispatching/AutomatedEquipmentDispatching";



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
        element: <DriverApp />,
      },
      {
        path: "/automated-equipment-dispatching",
        element: <AutomatedEquipmentDispatching />,
      },
      {
        path: "/fuel-stops",
        element: <SuggestedFuelStops />,
      }, 
      

     
    ],
   
  },


 
]);

export default routes;
