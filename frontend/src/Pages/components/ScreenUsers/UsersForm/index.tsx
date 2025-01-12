import React, { FC, FormEvent } from "react";
import { AppContext } from "../../../../Context";
import { InputCard, OptionInputCard } from "../../InputsCards";
import { SubTitle } from "../../SubTitle";
import { WrapperContainer2 } from "../../WrapperContainers";
import { handlePostData } from "../../../../utils/handleData/handlePostData";
import { handleInputChange } from "../../../../utils/handleInputChange";
import { GridContainer } from "../../GridContainer";
import { ButtonCard } from "../../ButtonCard";

interface CoursesFormProps {
    roles: any[];
}

const UsersForm: FC<CoursesFormProps> = ({roles}) => {
    const { setLoading } = React.useContext(AppContext)

    const [ values, setValues ] = React.useState({
        id: "",
        first_name: "",
        last_name: "",
        email: "",
        phone: "",
        role_id: "",
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