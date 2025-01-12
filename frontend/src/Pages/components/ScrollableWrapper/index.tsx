import { CSSProperties, FC } from "react";
import "./styles.css";

interface ScrollableWrapperProps {
    children: React.ReactNode;
    maxHeight?: CSSProperties["maxHeight"];
    gap?: CSSProperties["gap"];
    alignItems?: CSSProperties["alignItems"];
}

const ScrollableWrapper: FC<ScrollableWrapperProps> = ({children,  maxHeight = 250, gap = 0, alignItems="center"}) => {
    return(
        <div className="scrollable-wrapper-container" style={{
            maxHeight: maxHeight,
            gap: gap,
            alignItems: alignItems,
        }}>
            {children}     
        </div>
    );
}

export { ScrollableWrapper };