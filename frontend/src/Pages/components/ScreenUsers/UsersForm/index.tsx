import React, { FC, FormEvent } from "react";
import { AppContext } from "../../../../Context";
import { InputCard, OptionInputCard } from "../../InputsCards";
import { SubTitle } from "../../SubTitle";
import { WrapperContainer2 } from "../../WrapperContainers";
import { handlePostData } from "../../../../utils/handleData/handlePostData";
import { handleInputChange } from "../../../../utils/handleInputChange";
import { GridContainer } from "../../GridContainer";
import { ButtonCard } from "../../ButtonCard";
import { DropCard } from "../../DropCard";

interface CoursesFormProps {
    roles: Array<object>;
    courses: Array<{ id: number; name: string }>;
    inscriptionStatus: Array<{ id: number; name: string }>;
}

const UsersForm: FC<CoursesFormProps> = ({roles, courses, inscriptionStatus}) => {
    const { setLoading } = React.useContext(AppContext)

    const [ values, setValues ] = React.useState({
        id: "",
        first_name: "",
        last_name: "",
        email: "",
        phone: "",
        role_id: "",
        course_id: "",
        inscription_status_id: ""
    })

    const handleSubmit = async (event: FormEvent) => {
        event.preventDefault()
        setLoading(true)
        await handlePostData(event, values, "/users")

        setLoading(false)
    }

    return(
        <form onSubmit={handleSubmit} style={{width: "100%"}}>
            <WrapperContainer2 gap={30}>
                <SubTitle>Ingrese los datos del nuevo usuario</SubTitle>
                <GridContainer className="grid-1-1" padding={0}>
                    <InputCard
                        id="user-id"
                        label="Numero de cedula"
                        onChange={(event: InputEvent) => {handleInputChange("id", event, setValues)}}
                        defaultValue={values?.id}
                        placeholder="Ingrese el nombre"
                    />
                    <InputCard
                        id="first_name"
                        label="Nombres"
                        onChange={(event: InputEvent) => {handleInputChange("first_name", event, setValues)}}
                        defaultValue={values?.first_name}
                        placeholder="Ingrese sus nombres"
                    />
                    <InputCard
                        id="last_name"
                        label="Apellidos"
                        onChange={(event: InputEvent) => {handleInputChange("last_name", event, setValues)}}
                        defaultValue={values?.last_name}
                        placeholder="Ingrese sus apellidos"
                    />
                    <InputCard
                        type="email"
                        id="email"
                        label="Correo electronico"
                        onChange={(event: InputEvent) => {handleInputChange("email", event, setValues)}}
                        defaultValue={values?.email}
                        placeholder="Ingrese su correo electronico"
                    />
                    <InputCard
                        id="phone"
                        type="number"
                        label="Numero de telefono"
                        accept="number"
                        onChange={(event: InputEvent) => {handleInputChange("phone", event, setValues)}}
                        defaultValue={values?.phone}
                        placeholder="Ingrese su numero de telefono"
                    />

                    <OptionInputCard
                        id="role-id"
                        label="Rol del usuario"
                        array={roles}
                        onChange={(event: InputEvent) => {handleInputChange("role_id", event, setValues)}}
                        defaultValue={values?.role_id}
                        none={true}
                        placeholder="Seleccione un rol"
                    />
                    <DropCard
                        title="Seleccione el curso al cual desea incribir al usuario"
                        array={courses}
                        onClick={(id: string) => handleInputChange("course_id", id, setValues)}
                        value={values?.course_id}
                        searchBox={true}
                        seeAllOption={true}
                    />
                    <DropCard
                        title="Seleccione el estado de inscripcion del usuario"
                        array={inscriptionStatus}
                        onClick={(id: string) => handleInputChange("inscription_status_id", id, setValues)}
                        value={values?.inscription_status_id}
                        searchBox={false}
                        seeAllOption={false}
                    />

                </GridContainer>
                    <ButtonCard
                        type="submit"
                        onClick={() => {}}
                        title="Crear curso"
                    >
                        Registrar usuario
                    </ButtonCard>
            </WrapperContainer2>
        </form>
    );
}

export { UsersForm };