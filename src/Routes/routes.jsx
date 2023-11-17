import { createBrowserRouter } from "react-router-dom";
import Main from "../Main/Main";
import Home from "../Pages/Home/Home";
import DetailsOne from "../Pages/DetailsOne/DetailsOne";
import DetailsTwo from "../Pages/DetailsTwo/DetailsTwo";
import DetailsThree from "../Pages/DetailsThree/DetailsThree";

const routes = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        // errorElement: <NotFoundPage/>,
        children: [
            {
                path: "/",
                element: <Home />
            },{
                path: "/details-1",
                element: <DetailsOne />
            },{
                path: "/details-2",
                element: <DetailsTwo />
            },
             {
                path: "/details-3",
                element: <DetailsThree />
            }, 
        ]

    }
])

export default routes
