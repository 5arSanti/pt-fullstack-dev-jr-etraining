import React, { ReactNode } from "react";

import { useNavigate } from "react-router-dom";
import { handleAuthRequest } from "../../../utils/HandleAuth/handleAuthRequest";
import { AppContext } from "../../../Context";
import { handleAdmin } from "../../../utils/HandleAuth/handleAdmin";


const AuthWrapper = ({children} : { children: ReactNode }) => {
    const context = React.useContext(AppContext);

    const { user } = context;

    const navigate = useNavigate();

    React.useEffect(() => {
        handleAuthRequest(context, navigate)
    }, []);


    React.useEffect(() => {
        handleAdmin(user, context.setAdmin)
    }, [context.user])


    return (
        children
    );
}

export { AuthWrapper }