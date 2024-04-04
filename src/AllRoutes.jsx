import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import LocomotiveSkew from "./Locomotive-Skew";

export const routes = [
  { path: "/", element: <Home />, name: "Home" },
  {
    path: "/locomotive-skew",
    element: <LocomotiveSkew />,
    name: "Locomotive-Skew",
  },
];

const AllRoutes = () => {
  return (
    <Routes>
      {routes.map((route) => (
        <Route key={route.path} path={route.path} element={route.element} />
      ))}
    </Routes>
  );
};

export default AllRoutes;
