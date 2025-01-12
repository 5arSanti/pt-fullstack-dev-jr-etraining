import { FC } from "react";
import { TextCard } from "../../TextComponents";
import { Title } from "../../Title";
import { WrapperContainer2 } from "../../WrapperContainers";

interface SectionTitleProps {
    title: string;
    subTitle?: string;
    white?: boolean;
}

const SectionTitle: FC<SectionTitleProps> = ({title="", subTitle="", white=false}) => {
    return(
        <WrapperContainer2 flexDirection="column" gap={0} height="auto">
            {subTitle != "" && 
                <TextCard white={white} fontSize={12} textAlign="center">{subTitle}</TextCard>
            }

            {title != "" &&
                <Title white={white}>{title.toLocaleUpperCase()}</Title>
            }
        </WrapperContainer2>
    );
}

export { SectionTitle };