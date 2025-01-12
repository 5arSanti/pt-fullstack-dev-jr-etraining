import React, { ReactNode, useState, Dispatch, SetStateAction } from "react";
import { fetchAllData } from "../utils/handleData/handleFetchData";
import { handleNotifications } from "../utils/handleNotifications";

interface User {
    ID_Tipo_Usuarios: number;
}

interface AppContextProps {
    loading: boolean | null;
    setLoading: Dispatch<SetStateAction<boolean | null>>;

    auth: boolean;
    setAuth: Dispatch<SetStateAction<boolean>>;

    user: User;
    setUser: Dispatch<SetStateAction<User>>;

    admin: boolean;
    setAdmin: Dispatch<SetStateAction<boolean>>;

    windowWidth: number;
    setWindowWidth: Dispatch<SetStateAction<number>>;

    responseData: Record<string, object>;
    setResponseData: Dispatch<SetStateAction<Record<string, object>>>;

    fetchData: (
        endpoints: string[], 
        setState?: Dispatch<SetStateAction<Record<string, any>>>) => Promise<void>;
}

const defaultContext: AppContextProps = {
    loading: null,
    setLoading: () => {},

    auth: true,
    setAuth: () => {},

    user: { ID_Tipo_Usuarios: 0 },
    setUser: () => {},

    admin: true,
    setAdmin: () => {},

    windowWidth: window.innerWidth,
    setWindowWidth: () => {},

    responseData: {},
    setResponseData: () => {},

    fetchData: async () => {},
};


export const AppContext = React.createContext<AppContextProps>(defaultContext);


interface AppProviderProps {
  children: ReactNode;
}

const AppProvider: React.FC<AppProviderProps> = ({ children }) => {

    const [loading, setLoading] = useState<boolean | null>(null);

    const [auth, setAuth] = useState<boolean>(true);

    const [admin, setAdmin] = useState<boolean>(true);
    
    const [user, setUser] = useState<User>({ ID_Tipo_Usuarios: 0 });
    
    const [responseData, setResponseData] = useState<Record<string, object>>({});


    const fetchData = async (
        endpoints: string[],
        setState: Dispatch<SetStateAction<Record<string, object>>> = setResponseData
    ) => {
        try {
            setLoading(true);
            const data = await fetchAllData(endpoints);
            setState((prevData) => ({ ...prevData, ...data }));

        } 
        catch (err: any) {
            handleNotifications("error", err.message);
        } 
        finally {
            setLoading(false);
        }
    };


    React.useEffect(() => {
        const endpoints: string[] = [
            "/version"
        ];
        fetchData(endpoints);
    }, []);
    console.log(responseData)


    const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);

    React.useEffect(() => {
        const handleResize = () => {
        setWindowWidth(window.innerWidth);
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <AppContext.Provider
        value={{
            loading,
            setLoading,

            auth,
            setAuth,

            user,
            setUser,

            admin,
            setAdmin,

            windowWidth,
            setWindowWidth,

            responseData,
            setResponseData,

            fetchData,
        }}
        >
        {children}
        </AppContext.Provider>
    );
};

export { AppProvider };
