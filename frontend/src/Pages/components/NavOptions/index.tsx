import { FC } from "react";
import { Link } from "react-router-dom";

import "./styles.css";
import { IoBook } from "react-icons/io5";
import { FaHome } from "react-icons/fa";
import { FaUsersCog } from "react-icons/fa";

interface NavOptionsProps {
    className?: string;
}

const NavOptions: FC<NavOptionsProps> = ({className="nav-buttons animacion2 pl2"}) => {
    return(
        <div className="nav-buttons-container">
            <Link to={"/home"} className={`${className}`}>Pagina Principal <FaHome/></Link>
            <Link to={"/courses"} className={`${className}`}>Cursos <IoBook/></Link>
            <Link to={"/users"} className={`${className}`}>Usuarios <FaUsersCog/></Link>

        </div>
    )
}
export { NavOptions };