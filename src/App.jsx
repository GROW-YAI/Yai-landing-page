import { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import RootLayout from "./layouts/RootLayout";
import Home from "./pages/home";
import Hero from "./pages/home/sections/Hero";
import Showcase from "./pages/home/sections/Showcase";
import Contact from "./pages/home/sections/Contact";
import Vision from "./pages/home/sections/Vision";
import AboutInnovator from "./pages/home/sections/AboutInnovator";
import AboutProduct from "./pages/home/sections/AboutProduct";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [{ index: true, element: <Home /> }, 
      { path: "/home", element: <Hero /> },
      { path: "/about_innovator", element: <AboutInnovator /> },
      { path: "/about_product", element: <AboutProduct /> },
      { path: "/vision", element: <Vision /> },
      { path: "/products", element: <Showcase /> },
      { path: "/contacts", element: <Contact /> },

      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
