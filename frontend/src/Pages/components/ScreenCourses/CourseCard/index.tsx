import { Link } from "react-router-dom";
import { SpanCard, TextCard } from "../../TextComponents";
import { WrapperContainer3 } from "../../WrapperContainers";

interface CourseCardProps {
    id: number;
    name: string; 
    modality: string; 
    duration: number; 
    quota: number
}

const CourseCard = ({item} : {item: CourseCardProps}) => {
    return (
        <Link to={`/courses/${item.id}`} title={`Ir al curso de ${item.name}`}>
            <WrapperContainer3 gap={10}>
                
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
            </WrapperContainer3>
        </Link>
    );
}

export { CourseCard };