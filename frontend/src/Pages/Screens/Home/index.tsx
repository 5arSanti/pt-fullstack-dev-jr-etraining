import { IoBook } from "react-icons/io5";
import { MainSectionInfoCard } from "../../components/MainSectionInfoCard";
import { StyledSection } from "../../components/StyledSection";
import { TextCard } from "../../components/TextComponents";
import { SectionWrapper } from "../../components/SectionWrapper";

import "./styles.css"
import { SectionTitle } from "../../components/SectionWrapper/SectionTitle";
import React from "react";
import { AppContext } from "../../../Context";
import { TableContainer } from "../../components/TableContainer";
import { SubTitle } from "../../components/SubTitle";

const Home = () => {

        const { fetchData, responseData } = React.useContext(AppContext)
    
        const { studentsByStatus, coursesByModality } = responseData

    React.useEffect(() => {
        const endpoints: string[] = [
            "/inscription-status/students",
            "/modalities/courses"
        ]

        fetchData(endpoints)
    }, [])


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
                <SectionTitle title="Consultas" subTitle="Seccion de"/>

                <SubTitle>Numero de cursos por modalidad</SubTitle>
                <TableContainer
                    data={Array.isArray(coursesByModality) ? coursesByModality : []}
                    onDelete={() => {}}
                    canDelete={false}
                />

                <SubTitle>Estudiantes por estado de matricula en cada curso</SubTitle>
                <TableContainer
                    data={Array.isArray(studentsByStatus) ? studentsByStatus : []}
                    onDelete={() => {}}
                    canDelete={false}

                />

            </SectionWrapper>
        </>
        // </AuthWrapper>
    );
}

export { Home };