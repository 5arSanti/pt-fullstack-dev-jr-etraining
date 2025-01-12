import { CSSProperties, FC } from "react";
import { Fade } from "react-awesome-reveal";

interface FadeWrapperProps {
    children: React.ReactNode;
    width?: CSSProperties["width"];
}

const FadeWrapper: FC<FadeWrapperProps> = ({children, width="100%"}) => {
    return(
        <Fade style={{width: width}} cascade={true} damping={1} delay={100}>
            {children}
        </Fade>
    );
}

export { FadeWrapper };