import React, { FC, FormEvent } from "react";
import { AppContext } from "../../../../Context";
import { InputCard, OptionInputCard } from "../../InputsCards";
import { SubTitle } from "../../SubTitle";
import { WrapperContainer2 } from "../../WrapperContainers";
import { handlePostData } from "../../../../utils/handleData/handlePostData";
import { handleInputChange } from "../../../../utils/handleInputChange";
import { GridContainer } from "../../GridContainer";

interface CoursesFormProps {
    modalities: any[];
}

const CoursesForm: FC<CoursesFormProps> = ({modalities}) => {
    const { setLoading } = React.useContext(AppContext)

    const [ values, setValues ] = React.useState({
        name: "",
        modality_id: null,
        duration: null
    })

    const handleSubmit = async (event: FormEvent) => {
        event.preventDefault()
        setLoading(true)
        await handlePostData(event, values, "/courses")

        setLoading(false)
    }

    return(
        <WrapperContainer2>
            <SubTitle>Ingrese los datos del nuevo curso</SubTitle>
            <form onSubmit={handleSubmit}>
                <GridContainer className="grid-1-1">
                    <InputCard
                        id="course-name"
                        label="Nombre del curso"
                        onChange={(event: InputEvent) => {handleInputChange("name", event, setValues)}}
                        defaultValue={values?.name}
                    />

                    <OptionInputCard
                        id="course-modality"
                        label="Modalidad"
                        array={modalities}
                        onChange={(event: InputEvent) => {handleInputChange("modality", event, setValues)}}
                        defaultValue={values?.modality_id}
                        none={true}
                    />

                    <InputCard
                        id="duration"
                        label="Duracion del curso en horas"
                        onChange={(event: InputEvent) => {handleInputChange("duration", event, setValues)}}
                        defaultValue={values?.duration}
                    />
                    <InputCard
                        id="quota"
                        label="Cuota del curso"
                        onChange={(event: InputEvent) => {handleInputChange("duration", event, setValues)}}
                        defaultValue={values?.duration}
                    />
                    
                </GridContainer>
            </form>
        </WrapperContainer2>
    );
}

export { CoursesForm };