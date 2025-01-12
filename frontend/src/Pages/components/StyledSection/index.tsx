import { CSSProperties, FC } from "react";
import "./styles.css"

interface StyledSectionProps {
    children: React.ReactNode;
    image: string;
    height?: CSSProperties["height"];
    className?: string;
}

const StyledSection: FC<StyledSectionProps> = ({children, image, height="100vh", className=""}) => {

    return (
        <section 
            className={`styled-home-main-container ${className}`}
            id="about"
            style={{
                height: height,
            }}
        >
            <div className="gradient-container">
                {children}
            </div>

            <img src={image} alt="Main home imagen"/>
        </section>
    );
}

export { StyledSection }