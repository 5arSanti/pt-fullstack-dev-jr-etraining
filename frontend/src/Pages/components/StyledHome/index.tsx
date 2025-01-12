import { FC } from "react";
import "./styles.css"

interface StyledHomeProps {
    children: React.ReactNode;
    image?: string;
}

const StyledHome: FC<StyledHomeProps> = ({children, image=""}) => {

    return (
        <section className="styled-home-main-container" id="about">
            <div className="gradient-container">
                {children}
            </div>

            <img src={image} alt="Alternative text"/>
        </section>
    );
}

export { StyledHome }