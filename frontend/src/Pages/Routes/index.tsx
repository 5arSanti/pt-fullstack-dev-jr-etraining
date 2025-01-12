import { Navigate, useRoutes } from "react-router-dom";

import { Home } from "../Screens/Home";
import { CoursesScreen } from "../Screens/CoursesScreen";
import { UsersScreen } from "../Screens/UsersScreen";

const AppRoutes = () => {

    const routes = useRoutes([
        {path: "/home", element: <Home/>},
        {path: "/courses", element: <CoursesScreen/>},
        {path: "/courses/:course_id", element: <CoursesScreen/>},
        {path: "/users", element: <UsersScreen/>},

        {path: "/*", element: <Navigate replace to={"/home"}/>},
    ]);
    
    return routes;
}

export { AppRoutes };