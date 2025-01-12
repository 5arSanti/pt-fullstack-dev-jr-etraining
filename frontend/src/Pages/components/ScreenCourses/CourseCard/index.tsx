import { SpanCard, TextCard } from "../../TextComponents";
import { WrapperContainer3 } from "../../WrapperContainers";
import { ButtonCard } from "../../ButtonCard";

import { MdDelete } from "react-icons/md";
import { handleDeleteData } from "../../../../utils/handleData/handleDeleteData";

import "./styles.css";

interface CourseCardProps {
    id: number;
    name: string; 
    modality: string; 
    duration: number; 
    quota: number;
    total: number;
}

const CourseCard = ({item} : {item: CourseCardProps}) => {
    return (
        <WrapperContainer3 gap={10} className="relative">
            <ButtonCard
                title={`Eliminar el curso de ${item.name}`}
                onClick={() => {handleDeleteData(item, "/courses")}}
                className="top-right button-sm"
            >
                <MdDelete/>
            </ButtonCard>

            <TextCard>
                <SpanCard fontSize={14}>Nombre del curso</SpanCard> <br />
                <SpanCard fontSize={24}>{item.name}</SpanCard>
            </TextCard>
            <TextCard>
                Modalidad del curso: {item.modality}
            </TextCard>
            <TextCard>
                Duracion del curso: {item.duration} horas
            </TextCard>
            <TextCard>Cuota del curso: {item.quota} estudiantes</TextCard>
            <TextCard>Usuarios inscritos: {item.total}</TextCard>

            
        </WrapperContainer3>

    );
}

export { CourseCard };