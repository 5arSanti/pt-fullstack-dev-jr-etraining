import React from "react";
import { MainSectionInfoCard } from "../../components/MainSectionInfoCard";
import { SectionWrapper } from "../../components/SectionWrapper";
import { StyledSection } from "../../components/StyledSection";
import { TextCard } from "../../components/TextComponents";
import { Title } from "../../components/Title";
import { FaUsersCog } from "react-icons/fa";
import { AppContext } from "../../../Context";
import { UsersForm } from "../../components/ScreenUsers/UsersForm";

const UsersScreen = () => {

    const { fetchData, responseData } = React.useContext(AppContext)

    React.useEffect(() => {
        const endpoints: string[] = [
            "/roles",
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

                <TextCard textAlign="center">
                    Puede realizar el registro de un nuevo usuario a traves del siguiente formulario
                </TextCard>
                <UsersForm roles={Array.isArray(responseData?.roles) ? responseData.roles : []}/>
            </SectionWrapper>

        </>
    )
}

export { UsersScreen };