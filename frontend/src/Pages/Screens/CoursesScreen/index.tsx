import { MainSectionInfoCard } from "../../components/MainSectionInfoCard";
import { SectionWrapper } from "../../components/SectionWrapper";
import { StyledSection } from "../../components/StyledSection";
import { TextCard } from "../../components/TextComponents";
import { Title } from "../../components/Title";
import { IoBook } from "react-icons/io5";

const CoursesScreen = () => {
    return(
        <>
            <StyledSection
                image="https://images.pexels.com/photos/4195504/pexels-photo-4195504.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            >
                <MainSectionInfoCard
                    title="Cursos"
                    subTitle="Aqui podras crear un curso"
                    icon={<IoBook/>}
                />
            </StyledSection>

            <SectionWrapper>
                <Title>
                    Bienvenido a la sección de cursos
                </Title>

                <TextCard>
                    Puede realizar la creacion de un curso a traves del siguiente formulario
                </TextCard>
            </SectionWrapper>

        </>
    )
}

export { CoursesScreen };