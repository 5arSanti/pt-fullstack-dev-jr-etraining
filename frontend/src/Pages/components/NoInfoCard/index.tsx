
import { TbAdjustmentsQuestion } from "react-icons/tb";

import "./styles.css";
import { WrapperContainer1 } from "../WrapperContainers";
import { TextCard } from "../TextComponents";

const NoInfoCard = () => {
    return(
        <WrapperContainer1 padding={30} flexDirection="row" justifyContent="center" alignItems="center">
            <TbAdjustmentsQuestion className="no-info-icon"/>
            <TextCard fontSize={18}>No hay información para mostrar</TextCard>
        </WrapperContainer1>
    );
}

export { NoInfoCard };