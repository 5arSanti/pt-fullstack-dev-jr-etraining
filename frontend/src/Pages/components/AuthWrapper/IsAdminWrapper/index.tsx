import React from "react";
import { NotFoundCard } from "../../NotFoundCard";
import { AppContext } from "../../../../Context";

interface IsAdminWrapperProps {
    children: React.ReactNode;
    notFound?: boolean;
}

const IsAdminWrapper: React.FC<IsAdminWrapperProps> = ({children, notFound=false}) => {
    const context = React.useContext(AppContext);

    const { auth, admin } = context;

    if (!auth) {
        return;
    }
    if (!admin) {
        return;
    }

    if (notFound && !admin) {
        return <NotFoundCard/>
    }

    return (children);
}

export { IsAdminWrapper };