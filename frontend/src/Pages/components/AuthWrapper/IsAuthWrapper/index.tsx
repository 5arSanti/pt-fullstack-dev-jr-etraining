import React from "react";
import { AppContext } from "../../../../Context";
import { NotFoundCard } from "../../NotFoundCard";

interface IsAuthWrapperProps {
    children: React.ReactNode;
    notFound?: boolean;
}

const IsAuthWrapper: React.FC<IsAuthWrapperProps> = ({children, notFound=false}) => {
    const context = React.useContext(AppContext);

    const { auth } = context;


    if (auth) {
        return (children);
    }

    if (notFound) {
        return <NotFoundCard/>
    }

    return;
}

export { IsAuthWrapper }