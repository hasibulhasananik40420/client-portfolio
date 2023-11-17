import { Outlet, useLocation } from "react-router-dom"
import ScrollToTop from "../Components/ScrollToTop/ScrollToTop"
import { useEffect } from "react";

const Main = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <div>
        {/* <Navbar/> */}
        <ScrollToTop/>
        <Outlet/>
       
    </div>
  )
}

export default Main