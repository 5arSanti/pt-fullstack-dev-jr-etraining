import { CSSProperties } from "react";
import "./styles.css";

interface TextComponentsProps {
    children: React.ReactNode;
    textAlign?: CSSProperties['textAlign'];
    width?: CSSProperties['width'];
    className?: string;
    fontSize?: CSSProperties["fontSize"];
    white?: boolean;
    uri?: string;
    padding?: CSSProperties["padding"];
}

const TextCard: React.FC<TextComponentsProps> = ({children, textAlign="start", width="100%", className="", fontSize=16, white=false}) => {
    return(
        <p 
            style={{
                textAlign: textAlign, 
                width: width,
                fontSize: fontSize,
            }} 
            className={`text-card ${className} ${white ? "white-color" : "text-color"}`}>{children}</p>
    );
}

const SpanCard: React.FC<TextComponentsProps> = ({children, className, fontSize=16}) => {
    return (
        <span className={`span-card ${className}`} style={{
            fontSize: fontSize,

        }}>{children}</span>
    );
}

const AnchorCard: React.FC<TextComponentsProps> = ({children, uri="", className="", padding=0, width="100%", fontSize=16}) => {
    if (uri === "" || uri == null) {
        return;
    }
    
    return (
        <a href={uri} target="_blank" rel="noopener noreferrer" className={`anchor-card ${className}`} style={{
            padding: padding,
            width: width,
            fontSize: fontSize,

        }}>
            {children}
        </a>
    );
}

export { TextCard, SpanCard, AnchorCard }