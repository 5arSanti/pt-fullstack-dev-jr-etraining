import { CSSProperties, FC } from "react";
import { SpanCard, TextCard } from "../TextComponents";
import { WrapperContainer2 } from "../WrapperContainers";

import "./styles.css"

interface SubInfoCardProps {
    subTitle: string;
    text: string;
    textAlign?: CSSProperties["textAlign"];
    titleSize?: CSSProperties["fontSize"];
    textSize?: CSSProperties["fontSize"];
    padding?: string;
}

const SubInfoCard: FC<SubInfoCardProps> = ({
    subTitle, 
    text, 
    textAlign="start",
    titleSize=12,
    textSize=18,
    padding="15px 25px"
}) => {
    return (
        <WrapperContainer2 flexDirection="column" padding={padding} gap={5} height="auto" className="sub-info-card-container">
            <TextCard textAlign={textAlign}>
                <SpanCard fontSize={titleSize}>
                    {subTitle}
                </SpanCard>
            </TextCard>

            <TextCard fontSize={textSize} className={"italic bold"} textAlign={textAlign}>
                {text}
            </TextCard>
        </WrapperContainer2>
    );
}

export { SubInfoCard };