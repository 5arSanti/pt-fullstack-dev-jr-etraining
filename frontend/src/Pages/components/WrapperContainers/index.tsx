import { CSSProperties } from "react";
import "./styles.css";

interface WrappersTypes {
    children: React.ReactNode;
    flexDirection?: CSSProperties["flexDirection"];
    padding?: CSSProperties["padding"];
    paddingVertical?: CSSProperties["padding"];
    paddingHorizontal?: CSSProperties["padding"];
    gap?: CSSProperties["gap"];
    justifyContent?: CSSProperties["justifyContent"];
    alignItems?: React.CSSProperties["alignItems"];
    className?: string;
    height?: CSSProperties["height"];
    width?: CSSProperties["width"];
}

const WrapperContainer1: React.FC<WrappersTypes> = ({
    children, 
    flexDirection = "row", 
    padding = 20, 
    paddingVertical=null, 
    gap = 15, 
    justifyContent="start", 
    alignItems="center", 
    className="",
    height="100%",
    width="100%"
}) => {
return(
    <div className={`wrapper-container1 ${className}`} style={{
        flexDirection: flexDirection,
        padding: padding,
        paddingTop: paddingVertical || padding,
        paddingBottom: paddingVertical || padding,
        gap: gap,
        justifyContent: justifyContent,
        alignItems: alignItems,
        height: height,
        width: width
    }}>
            {children}
        </div>
    );
}

const WrapperContainer2: React.FC<WrappersTypes> = ({
        children, 
        flexDirection = "column", 
        padding = 20, 
        paddingVertical=null, 
        gap = 15, 
        justifyContent="start", 
        alignItems="center", 
        className="",
        height="100%",
        width="100%"
    }) => {
    return(
        <div className={`wrapper-container2 ${className}`} style={{
            flexDirection: flexDirection,
            padding: padding,
            paddingTop: paddingVertical || padding,
            paddingBottom: paddingVertical || padding,
            gap: gap,
            justifyContent: justifyContent,
            alignItems: alignItems,
            height: height,
            width: width
        }}>
            {children}
        </div>
    );
}

const WrapperContainer3: React.FC<WrappersTypes> = ({
    children, 
    flexDirection = "row", 
    padding = 20, 
    paddingVertical=null, 
    gap = 15, 
    justifyContent="start", 
    alignItems="center", 
    className="",
    height="auto",
    width: width

}) => {
    return(
        <div className={`wrapper-container3 ${className}`} style={{
            flexDirection: flexDirection,
            padding: padding,
            paddingTop: paddingVertical || padding,
            paddingBottom: paddingVertical || padding,
            gap: gap,
            justifyContent: justifyContent,
            alignItems: alignItems,
            height: height,
            width: width
        }}>
            {children}
        </div>
    );
}

const WrapperContainer4: React.FC<WrappersTypes> = ({children, flexDirection = "row", padding = 20, paddingVertical=50, paddingHorizontal=30, gap = 15, justifyContent="start", alignItems="start"}) => {
    return(
        <div className="wrapper-container4" style={{
            flexDirection: flexDirection,
            padding: padding,
            paddingTop: paddingVertical || padding,
            paddingBottom: paddingVertical || padding,
            paddingRight: paddingHorizontal || padding,
            paddingLeft: paddingHorizontal || padding,
            gap: gap,
            justifyContent: justifyContent,
            alignItems: alignItems
        }}>
            {children}
        </div>
    );
}

export { WrapperContainer1, WrapperContainer2, WrapperContainer3, WrapperContainer4 };