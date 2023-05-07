import logo from "./logo.svg";
import "./App.css";

import Home from "./Home/Home";
import WebDesign from "./WebDesign/WebDesign";
import AppDesign from "./AppDesign/AppDesign";
import GraphicDesign from "./GraphicDesign/GraphicDesign";
import AboutPage from "./About/AboutPage";
import LocaitonsPage from "./LocationsPage/LocationsPage";
import ContactPage from "./ContactPage/ContactPage";
import { RouterProvider, createBrowserRouter } from "react-router-dom";




function App() {

    const router = createBrowserRouter([
      {
        path:"/",
        element:<Home />
      },
      {
        path:"webDesign",
        element: <WebDesign />
      },
      {
        path:"appDesign",
        element: <AppDesign />
      },
      {
        path:"graphicDesign",
        element:<GraphicDesign />
      },
      {
        path:"about",
        element:<AboutPage />
      },
      {
        path:"locations",
        element: <LocaitonsPage />
      },
      {
        path:"contact",
        element: <ContactPage />
      }
    ])




  return (
    <div className="relative font-jost w-[100vw]">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
