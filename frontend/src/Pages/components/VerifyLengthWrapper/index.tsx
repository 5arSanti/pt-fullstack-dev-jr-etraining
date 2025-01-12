import { FC } from "react";
import { NoInfoCard } from "../NoInfoCard"

interface VerifyLengthProps {
    children: React.ReactNode;
    array: Array<any>;
}

const VerifyLength: FC<VerifyLengthProps> = ({children, array=[]}) => {
    const data = array || [];

    if (data.length == 0) {
        return(
            <NoInfoCard/>
        )
    } else {
        return(children)
    }
}

export { VerifyLength }