import { Navigate, useRoutes } from "react-router-dom";

import { Home } from "../Screens/Home";
import { CoursesScreen } from "../Screens/CoursesScreen";

const AppRoutes = () => {

    const routes = useRoutes([
        {path: "/home", element: <Home/>},
        {path: "/courses", element: <CoursesScreen/>},

        {path: "/*", element: <Navigate replace to={"/home"}/>},
    ]);
    
    return routes;
}

export { AppRoutes };