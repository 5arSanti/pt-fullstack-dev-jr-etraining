import axios from "axios";
import { api } from "../api";

import { handleNotifications } from "../handleNotifications";
import { ContextType } from "react";
import { AppContext } from "../../Context";
import { NavigateFunction } from "react-router-dom";


axios.defaults.withCredentials = true;

const handleAuthRequest = async (context: ContextType<typeof AppContext>, navigate: NavigateFunction) => {
    const { setUser, setAuth } = context;

    await axios.get(`${api}/auth/`)
        .then(response => {
            const { data } = response;

            if(data.Status === "Success") {
                setAuth(true);
                setUser(data.user);
            } else {
                setAuth(false);
            }
        })
        .catch(err => {
            setAuth(false);
            handleNotifications("error", err.message)
            navigate("/home");
        })
}

export { handleAuthRequest };