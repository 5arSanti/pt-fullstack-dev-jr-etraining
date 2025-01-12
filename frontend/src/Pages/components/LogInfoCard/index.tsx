import { CSSProperties, FC } from "react";

import "./styles.css";
import { WrapperContainer3 } from "../WrapperContainers";
import { SpanCard, TextCard } from "../TextComponents";

interface LogInfoCardProps {
    icon?: React.ReactNode;
    title: string;
    text: string;
    fontSize?: CSSProperties["fontSize"];
    width?: CSSProperties["width"];
    padding?: CSSProperties["padding"];
    gap?: CSSProperties["gap"];
}

const LogInfoCard: FC<LogInfoCardProps> = ({icon, title, text, fontSize=24, width="100%", padding=40, gap=20}) => {
    return(

        <WrapperContainer3 width={width} height="100%" flexDirection="column" gap={gap} justifyContent="center" padding={padding} className="log-info-card">
            {icon || ""}

            <TextCard fontSize={fontSize} className="bold" textAlign="center">
                {text}
            </TextCard>

            <TextCard textAlign="center">
                <SpanCard className={"italic"} fontSize={14}>
                    {title}
                </SpanCard>
            </TextCard>

        </WrapperContainer3>

    );
}

export { LogInfoCard };