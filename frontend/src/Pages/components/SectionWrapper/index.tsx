import { CSSProperties, FC } from "react";
import { FadeWrapper } from "../FadeWrapper";
import { WrapperContainer2 } from "../WrapperContainers";
import "./styles.css"

interface SectionWrapperProps {
    children: React.ReactNode;
    id?: string;
    border?: boolean;
    flexDirection?: CSSProperties["flexDirection"];
    padding?: CSSProperties["padding"];
    gap?: CSSProperties["gap"];
    justifyContent?: CSSProperties["justifyContent"];
    alignItems?: CSSProperties["alignItems"];
}

const SectionWrapper: FC<SectionWrapperProps> = ({children, id="", border=true, flexDirection = "column", padding = 0, gap = 0, justifyContent="start", alignItems="start"}) => {
    return(
        <section className="section-wrapper" id={id} style={{
            flexDirection: flexDirection,
            padding: padding,
            gap: gap,
            justifyContent: justifyContent,
            alignItems: alignItems
        }}>
            {border && <div className="section-decoration"></div>}

            <FadeWrapper>
                <WrapperContainer2 flexDirection="column" padding={125} className="secondary-section-wrapper">
                    {children}
                </WrapperContainer2>
            </FadeWrapper>
        </section>

    );
}


export { SectionWrapper };