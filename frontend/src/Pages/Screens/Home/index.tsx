import { IoBook } from "react-icons/io5";
import { MainSectionInfoCard } from "../../components/MainSectionInfoCard";
import { StyledSection } from "../../components/StyledSection";
import { Title } from "../../components/Title";
import { TextCard } from "../../components/TextComponents";
import { SectionWrapper } from "../../components/SectionWrapper";

import "./styles.css"

const Home = () => {
    return (
        // <AuthWrapper>
        <>
            <StyledSection
                image="https://images.pexels.com/photos/1652402/pexels-photo-1652402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            >
                <MainSectionInfoCard
                    title="Bienvenido"
                    subTitle="A la prueba tecnica de Full Stack Developer Junior de Johel Santiago Arias Becerra"
                    icon={<IoBook/>}
                />
            </StyledSection>
            
            <SectionWrapper>
                <TextCard>"</TextCard>
            </SectionWrapper>
        </>
        // </AuthWrapper>
    );
}

export { Home };