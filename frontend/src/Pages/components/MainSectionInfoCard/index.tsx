import { FadeWrapper } from "../FadeWrapper";
import { TextCard } from "../TextComponents";
import { Title } from "../Title";
import { WrapperContainer2 } from "../WrapperContainers";
import "./styles.css";
import { FC } from "react";

interface MainSectionInfoCardProps {
    title: string;
    subTitle: string;
    icon: React.ReactNode;
    white?: boolean;
}

const MainSectionInfoCard: FC<MainSectionInfoCardProps> = ({title="", subTitle="", icon, white=false}) => {
    return(
        <FadeWrapper>
            <WrapperContainer2 justifyContent="space-evenly" alignItems="center" gap={50} flexDirection="column" padding={150} className="main-section-info-card">

                <WrapperContainer2 height="auto" justifyContent="center" alignItems="center" gap={5} flexDirection="column">
                    {icon}
                    <Title white={white}>
                        {title.toLocaleUpperCase()}
                    </Title>
                    <TextCard white={true} textAlign="center" className="italic">
                        {subTitle}
                    </TextCard>

                </WrapperContainer2>

            </WrapperContainer2>
        </FadeWrapper>
    );
}

export { MainSectionInfoCard };