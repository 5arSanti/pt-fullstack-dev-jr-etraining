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
import { VerifyLength } from "../../components/VerifyLengthWrapper";
import { WrapperContainer2 } from "../../components/WrapperContainers";

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

                <WrapperContainer2 gap={30} padding={0}>
                    <SubTitle>Numero de cursos por modalidad</SubTitle>
                    <TextCard textAlign="start">Aca se pueden observar el numero de cursos por modalidad</TextCard>
                    <VerifyLength array={Array.isArray(coursesByModality) ? coursesByModality : []}>
                        <TableContainer
                            data={Array.isArray(coursesByModality) ? coursesByModality : []}
                            onDelete={() => {}}
                            canDelete={false}
                        />
                    </VerifyLength>


                    <SubTitle>Estudiantes por estado de matricula en cada curso</SubTitle>
                    <TextCard textAlign="start">Aca se pueden observar el numero total de <strong>estudiantes</strong> por estado de matricula y ordenados por curso</TextCard>
                    <VerifyLength array={Array.isArray(studentsByStatus) ? studentsByStatus : []}>
                        <TableContainer
                            data={Array.isArray(studentsByStatus) ? studentsByStatus : []}
                            onDelete={() => {}}
                            canDelete={false}

                        />
                    </VerifyLength>
                </WrapperContainer2>


            </SectionWrapper>
        </>
        // </AuthWrapper>
    );
}

export { Home };