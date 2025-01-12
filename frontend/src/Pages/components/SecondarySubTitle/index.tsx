import { CSSProperties, FC } from "react";
import "./styles.css";

interface SecondarySubTitleProps {
    children: React.ReactNode;
    color?: string;
    textAlign?: CSSProperties["textAlign"];
}

const SecondarySubTitle: FC<SecondarySubTitleProps> = ({children, color = "#FFF", textAlign = "center"}) => {
    return(
        <p className="secondary-sub-title" style={{
            color: color,
            textAlign: textAlign
        }}>
            {children}
        </p>
    );
}

export { SecondarySubTitle };