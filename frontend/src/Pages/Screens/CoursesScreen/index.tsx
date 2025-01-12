import React from "react";
import { MainSectionInfoCard } from "../../components/MainSectionInfoCard";
import { CoursesForm } from "../../components/ScreenCourses/CoursesForm";
import { SectionWrapper } from "../../components/SectionWrapper";
import { StyledSection } from "../../components/StyledSection";
import { TextCard } from "../../components/TextComponents";
import { Title } from "../../components/Title";
import { IoBook } from "react-icons/io5";
import { AppContext } from "../../../Context";
import { WrapperContainer2 } from "../../components/WrapperContainers";
import { SubTitle } from "../../components/SubTitle";
import { GridContainer } from "../../components/GridContainer";
import { CourseCard } from "../../components/ScreenCourses/CourseCard";




const CoursesScreen = () => {

    const { fetchData, responseData } = React.useContext(AppContext)

    const { modalities, coursesDetailed } = responseData;

    React.useEffect(() => {
        const endpoints: string[] = [
            "/modalities",
            "/courses/details"
        ]

        fetchData(endpoints)
    }, [])

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

                <WrapperContainer2>
                    <SubTitle>Lista de cursos existentes</SubTitle>
                    <GridContainer className="grid-1-1" padding={0}>
                        { Array.isArray(coursesDetailed) && coursesDetailed.map((item, index: number) => (
                            <CourseCard item={item} key={index}/>
                        ))}
                    </GridContainer>
                </WrapperContainer2>

                <TextCard textAlign="center">
                    Puede realizar la creacion de un curso a traves del siguiente formulario
                </TextCard>
                <CoursesForm modalities={Array.isArray(modalities) ? modalities : []}/>
            </SectionWrapper>

        </>
    )
}

export { CoursesScreen };