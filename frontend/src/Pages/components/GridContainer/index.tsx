import { FC } from "react";
import "./styles.css"

interface GridContainerProps {
    children: React.ReactNode;
    padding?: React.CSSProperties["padding"];
    className?: string;
    gap?: React.CSSProperties["gap"];
}

const GridContainer: FC<GridContainerProps> = ({children, padding=0, className="grid-1-1", gap=20}) => {
    return(
        <div className={`grid-container ${className}`} style={{
            gap: gap,
            padding: padding,
        }}>
            {children}
        </div>
    )
}

export { GridContainer };