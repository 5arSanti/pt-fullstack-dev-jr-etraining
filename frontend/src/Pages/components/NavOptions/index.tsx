import { Link } from "react-router-dom";

import "./styles.css";
import { IoBook } from "react-icons/io5";
import { FaHome } from "react-icons/fa";
import { FC } from "react";

interface NavOptionsProps {
    className?: string;
}

const NavOptions: FC<NavOptionsProps> = ({className="nav-buttons animacion2 pl2"}) => {
    return(
        <div className="nav-buttons-container">
            <Link to={"/home"} className={`${className}`}>Pagina Principal <FaHome/></Link>
            <Link to={"/courses"} className={`${className}`}>Cursos <IoBook/></Link>

        </div>
    )
}
export { NavOptions };