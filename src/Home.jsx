import { Link } from "react-router-dom";
import { routes } from "./AllRoutes";

const Home = () => {
  routes.map((route) => console.log(route.name));
  return (
    <div id="link-container">
      {routes.map((route) => (
        <Link to={route.path}>{route.name}</Link>
      ))}
    </div>
  );
};

export default Home;
