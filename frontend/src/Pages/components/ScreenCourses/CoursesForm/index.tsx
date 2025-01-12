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
    modalities: any[];
}

const CoursesForm: FC<CoursesFormProps> = ({modalities}) => {
    const { setLoading } = React.useContext(AppContext)

    const [ values, setValues ] = React.useState({
        name: "",
        modality_id: null,
        duration: null,
        quota: null
    })

    const handleSubmit = async (event: FormEvent) => {
        event.preventDefault()
        setLoading(true)
        await handlePostData(event, values, "/courses")

        setLoading(false)
    }

    return(
        <form onSubmit={handleSubmit} style={{width: "100%"}}>
            <WrapperContainer2 gap={30}>
                <SubTitle>Ingrese los datos del nuevo curso</SubTitle>
                <GridContainer className="grid-1-1" padding={0}>
                    <InputCard
                        id="course-name"
                        label="Nombre del curso"
                        onChange={(event: InputEvent) => {handleInputChange("name", event, setValues)}}
                        defaultValue={values?.name}
                        placeholder="Ingrese el nombre"
                    />

                    <OptionInputCard
                        id="course-modality"
                        label="Modalidad"
                        array={modalities}
                        onChange={(event: InputEvent) => {handleInputChange("modality_id", event, setValues)}}
                        defaultValue={values?.modality_id}
                        none={true}
                        placeholder="Seleccione una modalidad"
                    />

                    <InputCard
                        id="duration"
                        label="Duracion del curso en horas"
                        onChange={(event: InputEvent) => {handleInputChange("duration", event, setValues)}}
                        defaultValue={values?.duration}
                        placeholder="Ingrese la duracion"
                    />
                    <InputCard
                        id="quota"
                        label="Cuota del curso"
                        onChange={(event: InputEvent) => {handleInputChange("quota", event, setValues)}}
                        defaultValue={values?.quota}
                        placeholder="Ingrese la cuota"
                    />

                </GridContainer>
                    <ButtonCard
                        type="submit"
                        onClick={() => {}}
                        title="Crear curso"
                    >
                        Crear curso
                    </ButtonCard>
            </WrapperContainer2>
        </form>
    );
}

export { CoursesForm };