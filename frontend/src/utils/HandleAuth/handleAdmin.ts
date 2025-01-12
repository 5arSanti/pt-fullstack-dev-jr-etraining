import { Dispatch, SetStateAction } from "react";

interface User {
    ID_Tipo_Usuarios: number;
}


const handleAdmin = (user: User, setAdmin: Dispatch<SetStateAction<boolean>>) => {
    if (user.ID_Tipo_Usuarios === 1) {
        setAdmin(true);
        return;
    }
    setAdmin(false);
}

export { handleAdmin };