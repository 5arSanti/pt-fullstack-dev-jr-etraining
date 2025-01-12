import React from "react";
import { MainSectionInfoCard } from "../../components/MainSectionInfoCard";
import { SectionWrapper } from "../../components/SectionWrapper";
import { StyledSection } from "../../components/StyledSection";
import { TextCard } from "../../components/TextComponents";
import { Title } from "../../components/Title";
import { FaUsersCog } from "react-icons/fa";
import { AppContext } from "../../../Context";
import { UsersForm } from "../../components/ScreenUsers/UsersForm";
import { TableContainer } from "../../components/TableContainer";
import { WrapperContainer2 } from "../../components/WrapperContainers";
import { SubTitle } from "../../components/SubTitle";
import { handleDeleteData } from "../../../utils/handleData/handleDeleteData";

const UsersScreen = () => {

    const { fetchData, responseData } = React.useContext(AppContext)

    const { roles, users, courses, inscriptionStatus } = responseData

    React.useEffect(() => {
        const endpoints: string[] = [
            "/roles",
            "/users",
            "/courses",
            "/inscription-status"
        ]

        fetchData(endpoints)
    }, [])

    return(
        <>
            <StyledSection
                image="https://images.pexels.com/photos/159844/cellular-education-classroom-159844.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            >
                <MainSectionInfoCard
                    title="Usuarios"
                    subTitle="Aqui podras ver y registrar usuarios"
                    icon={<FaUsersCog/>}
                />
            </StyledSection>

            <SectionWrapper>
                <Title>
                    Bienvenido a la sección de usuarios
                </Title>


                <WrapperContainer2>
                    <SubTitle>Lista de usuarios registrados</SubTitle>
                    <TableContainer 
                        data={Array.isArray(users) ? users : []}
                        onDelete={(item) => {handleDeleteData(item, "/users")}}
                    />
                </WrapperContainer2>

                <TextCard textAlign="center">
                    Puede realizar el registro de un nuevo usuario a traves del siguiente formulario
                </TextCard>
                <UsersForm 
                    roles={Array.isArray(roles) ? roles : []}
                    courses={Array.isArray(courses) ? courses : []}
                    inscriptionStatus={Array.isArray(inscriptionStatus) ? inscriptionStatus : []}
                />
            </SectionWrapper>

        </>
    )
}

export { UsersScreen };