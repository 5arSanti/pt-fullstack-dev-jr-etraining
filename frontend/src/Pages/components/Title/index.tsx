import { CSSProperties, FC } from "react";
import "./styles.css";

interface TitleProps {
    children: React.ReactNode;
    white?: boolean;
    className?: string;
    padding?: CSSProperties["padding"];
    fontSize?: CSSProperties["fontSize"];
    textAlign?: CSSProperties["textAlign"];
    width?: CSSProperties["width"];
}

const Title: FC<TitleProps> = ({
    children, 
    white = false, 
    className = "", 
    padding = 15, 
    fontSize = 50, 
    textAlign = "center",
    width = "100%"
}) => {
    return (
        <div className="title-container" style={{
            padding: padding,
            width: width
        }}>
            <h1 
                className={`title archivo-font ${white && "white-color"} ${className}`}
                style={{
                    fontSize: fontSize,
                    textAlign: textAlign,
                }}
            >
                {children}
            </h1>
        </div>
    );
}

export { Title };